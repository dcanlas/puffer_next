import { makeGetQuery } from "./SmoobuService";
import { ROOM_TYPES, SCORING_WEIGHTS } from "../constants/roomScoring";

/**
 * Gets rates for multiple apartments for a given date range
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format
 * @param {number[]} apartmentIds - Array of apartment IDs to get rates for
 * @returns {Promise<{
 *   data: {
 *     [apartmentId: string]: {
 *       [date: string]: {
 *         price: number | null,
 *         min_length_of_stay: number | null,
 *         available: number
 *       }
 *     }
 *   }
 * }>}
 */
export async function getRates(startDate, endDate, apartmentIds) {
  try {
    // Create an array of apartment query parameters
    const apartmentParams = apartmentIds.map((id) => `apartments[]=${id}`).join("&");
    const queryString = `?start_date=${startDate}&end_date=${endDate}&${apartmentParams}`;
    const response = await makeGetQuery("/api/rates", queryString);
    return response;
  } catch (error) {
    console.error("Error getting rates:", error);
    throw error;
  }
}

/**
 * Checks if a room is available for the entire stay
 * @param {Object} ratesData - Rate data from getRates API
 * @param {string} propertyId - Property ID
 * @param {string} startDate - Start date
 * @param {string} endDate - End date
 * @returns {boolean} Whether the room is available for the entire stay
 */
function isRoomAvailable(ratesData, propertyId, startDate, endDate) {
  const propertyRates = ratesData.data[propertyId];
  if (!propertyRates) return false;

  let currentDate = new Date(startDate);
  const endDateTime = new Date(endDate);

  while (currentDate < endDateTime) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const dayData = propertyRates[dateStr];

    // Room is unavailable if:
    // - No data for the day
    // - Explicitly marked as unavailable (available = 0)
    // - No price set for the day
    if (!dayData || dayData.available === 0 || dayData.price === null) {
      return false;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return true;
}

/**
 * Calculates the average rate for a room over a date range
 * @param {Object} ratesData - Rate data from getRates API
 * @param {string} propertyId - Property ID
 * @param {string} startDate - Start date
 * @param {string} endDate - End date
 * @returns {number} Average rate for the stay
 */
function calculateAverageRate(ratesData, propertyId, startDate, endDate) {
  const propertyRates = ratesData.data[propertyId];
  if (!propertyRates) return null;

  let totalPrice = 0;
  let daysWithPrice = 0;
  let currentDate = new Date(startDate);
  const endDateTime = new Date(endDate);

  while (currentDate < endDateTime) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const dayRate = propertyRates[dateStr]?.price;

    if (dayRate !== null && dayRate !== undefined) {
      totalPrice += dayRate;
      daysWithPrice++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysWithPrice > 0 ? totalPrice / daysWithPrice : null;
}

/**
 * Scores a room combination based on various factors
 * @param {Object} combination - Room combination to score
 * @param {number} targetSize - Target party size
 * @param {string} optimizeFor - What to optimize for ('ac', 'budget', or 'any')
 * @returns {number} Score for the combination (lower is better)
 */
function scoreCombination(combination, targetSize, optimizeFor = "any") {
  // Validate inputs
  if (!combination || !combination.rooms || !Array.isArray(combination.rooms)) {
    return Infinity; // Invalid combinations get worst possible score
  }

  // Count rooms by type
  const acRoomCount = combination.rooms.filter((room) => room && room.type && ROOM_TYPES.AC.includes(room.type)).length;

  switch (optimizeFor) {
    case "ac":
      // Premium: Prioritize AC rooms absolutely
      if (acRoomCount === 0) {
        // No AC rooms in this combination, use as fallback with heavy penalty
        return combination.totalRate + SCORING_WEIGHTS.premium.NO_AC_PENALTY;
      } else if (acRoomCount < combination.rooms.length) {
        // Mixed AC and non-AC rooms, heavily penalize
        return combination.totalRate + SCORING_WEIGHTS.premium.MIXED_AC_PENALTY;
      }
      // All AC rooms, just use the total rate as score
      return combination.totalRate;

    case "budget":
      // Budget: Simply optimize for lowest total cost
      return combination.totalRate;

    case "any":
      // Mixed: Prioritize fewer rooms and lower cost
      return calculateMixedScore(combination, targetSize);

    default:
      return combination.totalRate;
  }
}

/**
 * Calculates a score for mixed optimization strategy
 * @param {Object} combination - Room combination to score
 * @param {number} targetSize - Target party size
 * @returns {number} Score for the combination (lower is better)
 */
function calculateMixedScore(combination, targetSize) {
  const { COST_WEIGHT, ROOM_COUNT_WEIGHT, WASTED_CAPACITY_WEIGHT, UNDER_CAPACITY_WEIGHT } = SCORING_WEIGHTS.alternative;

  const wastedCapacity = combination.totalOccupancy - targetSize;
  const numberOfRooms = combination.rooms.length;

  const costScore = combination.totalRate * COST_WEIGHT;
  const roomCountScore = numberOfRooms * ROOM_COUNT_WEIGHT;
  const wastedCapacityPenalty = Math.max(0, wastedCapacity) * WASTED_CAPACITY_WEIGHT;
  const underCapacityPenalty = Math.max(0, targetSize - combination.totalOccupancy) * UNDER_CAPACITY_WEIGHT;

  return costScore + roomCountScore + wastedCapacityPenalty + underCapacityPenalty;
}

/**
 * Processes a combination with rates data
 * @param {Array} combination - Room combination
 * @param {Object} rates - Rates data
 * @param {string} checkIn - Check-in date
 * @param {string} checkOut - Check-out date
 * @param {number} partySize - Party size
 * @returns {Object|null} Processed combination or null if invalid
 */
function processCombination(combination, rates, checkIn, checkOut, partySize) {
  // Validate inputs
  if (!combination || !Array.isArray(combination) || combination.length === 0) {
    return null;
  }

  const totalOccupancy = combination.reduce((sum, room) => {
    return sum + (room?.rooms?.maxOccupancy || 0);
  }, 0);

  const averageRates = combination.map((room) => ({
    room,
    rate: calculateAverageRate(rates, room.id.toString(), checkIn, checkOut),
  }));

  // Skip combinations with invalid rates
  if (averageRates.some((rate) => rate.rate === null)) {
    return null;
  }

  const totalRate = averageRates.reduce((sum, { rate }) => sum + rate, 0);

  // Create a processed combination with flattened room structure
  return {
    rooms: combination.map((room, index) => ({
      id: room.id,
      name: room.name,
      type: room.type,
      maxOccupancy: room.rooms.maxOccupancy,
      description: room.description || null,
      averageRate: averageRates[index].rate,
    })),
    totalOccupancy,
    totalRate,
    wastedCapacity: totalOccupancy - partySize,
  };
}

/**
 * Gets the best N combinations for a specific optimization type
 * @param {Array} combinations - All possible combinations
 * @param {Object} rates - Rates data
 * @param {string} checkIn - Check-in date
 * @param {string} checkOut - Check-out date
 * @param {number} partySize - Party size
 * @param {string} optimizeFor - What to optimize for ('ac', 'budget', or 'any')
 * @param {number} n - Number of combinations to return
 * @returns {Array<Object>} Top N combinations for the optimization type
 */
function getBestNCombinations(combinations, rates, checkIn, checkOut, partySize, optimizeFor, n = 3) {
  // First process all combinations
  const processedCombinations = combinations
    .map((combo) => processCombination(combo, rates, checkIn, checkOut, partySize))
    .filter(Boolean); // Remove null results

  // Then sort by score
  return processedCombinations
    .sort((a, b) => scoreCombination(a, partySize, optimizeFor) - scoreCombination(b, partySize, optimizeFor))
    .slice(0, n);
}

/**
 * Gets the best combination for a specific optimization type
 * @param {Array} combinations - All possible combinations
 * @param {Object} rates - Rates data
 * @param {string} checkIn - Check-in date
 * @param {string} checkOut - Check-out date
 * @param {number} partySize - Party size
 * @param {string} optimizeFor - What to optimize for ('ac', 'budget', or 'any')
 * @returns {Object|null} Best combination for the optimization type
 */
function getBestCombination(combinations, rates, checkIn, checkOut, partySize, optimizeFor) {
  return getBestNCombinations(combinations, rates, checkIn, checkOut, partySize, optimizeFor, 1)[0] || null;
}

/**
 * Finds all possible combinations of rooms that can accommodate the party size
 * @param {Array} rooms - Available rooms
 * @param {number} targetSize - Party size to accommodate
 * @param {Array} currentCombination - Current combination being built
 * @param {number} remainingSize - Remaining party size to accommodate
 * @param {Set} usedRooms - Set of room IDs already used in the combination
 * @returns {Array} Array of valid room combinations
 */
function findRoomCombinations(
  rooms,
  targetSize,
  currentCombination = [],
  remainingSize = targetSize,
  usedRooms = new Set()
) {
  const combinations = [];

  // Base case: if we've met or exceeded the target size
  if (remainingSize <= 0) {
    return [currentCombination];
  }

  // Sort rooms by occupancy (descending) to try larger rooms first
  const sortedRooms = [...rooms].sort((a, b) => b.rooms.maxOccupancy - a.rooms.maxOccupancy);

  for (const room of sortedRooms) {
    if (usedRooms.has(room.id)) continue;

    // Skip if adding this room would exceed target size by too much
    const newTotalOccupancy =
      currentCombination.reduce((sum, r) => sum + r.rooms.maxOccupancy, 0) + room.rooms.maxOccupancy;
    if (newTotalOccupancy > targetSize * 1.5) continue;

    const newCombination = [...currentCombination, room];
    const newUsedRooms = new Set(usedRooms).add(room.id);
    const newRemainingSize = remainingSize - room.rooms.maxOccupancy;

    if (newRemainingSize <= 0) {
      combinations.push(newCombination);
    } else {
      const subCombinations = findRoomCombinations(
        sortedRooms,
        targetSize,
        newCombination,
        newRemainingSize,
        newUsedRooms
      );
      combinations.push(...subCombinations);
    }
  }

  return combinations;
}

/**
 * Finds available room combinations for a given party size
 * @param {string} checkIn - Check-in date in YYYY-MM-DD format
 * @param {string} checkOut - Check-out date in YYYY-MM-DD format
 * @param {number} partySize - Number of guests
 * @param {Object} roomsData - Room configuration data
 * @returns {Promise<{
 *   combinations: {
 *     premium: { type: string, combination: Object },
 *     budget: { type: string, combination: Object },
 *     alternative: { type: string, combination: Object }
 *   },
 *   errors: Array
 * }>} Available room combinations with pricing and any errors
 */
export async function findAvailableRoomCombinations(checkIn, checkOut, partySize, roomsData) {
  const errors = [];

  try {
    // Get all rooms that might be part of a combination
    const allRooms = Object.entries(roomsData).flatMap(([roomType, roomData]) =>
      roomData.properties.map((property) => ({
        ...property,
        type: roomType,
      }))
    );

    if (allRooms.length === 0) {
      errors.push({
        type: "NO_ROOMS_CONFIGURED",
        message: "No rooms are configured in the system",
      });
      return {
        combinations: {},
        errors,
      };
    }

    const allRoomIds = allRooms.map((room) => room.id);

    // Get rates and availability information
    let rates;
    try {
      rates = await getRates(checkIn, checkOut, allRoomIds);
    } catch (error) {
      console.error("Error fetching rates:", error);
      errors.push({
        type: "RATES_API_ERROR",
        message: "Failed to fetch room rates",
        details: error.message,
      });
      return {
        combinations: {},
        errors,
      };
    }

    // Filter to only available rooms and sort by occupancy
    const availableRooms = allRooms
      .filter((room) => isRoomAvailable(rates, room.id.toString(), checkIn, checkOut))
      .sort((a, b) => b.rooms.maxOccupancy - a.rooms.maxOccupancy);

    if (availableRooms.length === 0) {
      errors.push({
        type: "NO_ROOMS_AVAILABLE",
        message: "No rooms are available for the selected dates",
      });
      return {
        combinations: {},
        errors,
      };
    }

    // Check if we can accommodate the party size
    const totalCapacity = availableRooms.reduce((sum, room) => sum + room.rooms.maxOccupancy, 0);

    if (totalCapacity < partySize) {
      errors.push({
        type: "INSUFFICIENT_CAPACITY",
        message: `Cannot accommodate party of ${partySize}. Maximum capacity is ${totalCapacity} guests.`,
      });
      return {
        combinations: {},
        errors,
      };
    }

    // Find all possible combinations
    const allCombinations = findRoomCombinations(availableRooms, partySize);

    if (allCombinations.length === 0) {
      errors.push({
        type: "NO_VALID_COMBINATIONS",
        message: "Could not find valid room combinations for the party size",
      });
      return {
        combinations: {},
        errors,
      };
    }

    // Process all combinations once
    const processedCombinations = allCombinations
      .map((combo) => processCombination(combo, rates, checkIn, checkOut, partySize))
      .filter(Boolean);

    // Get the best combinations for each type
    const premiumCombo = getBestCombination(allCombinations, rates, checkIn, checkOut, partySize, "ac");
    const budgetCombo = getBestCombination(allCombinations, rates, checkIn, checkOut, partySize, "budget");

    // Get alternative combination
    const alternativeCombo =
      processedCombinations
        .filter(
          (combo) =>
            (!premiumCombo || JSON.stringify(combo) !== JSON.stringify(premiumCombo.rooms)) &&
            (!budgetCombo || JSON.stringify(combo) !== JSON.stringify(budgetCombo.rooms))
        )
        .sort((a, b) => scoreCombination(a, partySize, "any") - scoreCombination(b, partySize, "any"))[0] || null;

    // Prepare the combinations object
    const combinations = {};

    if (premiumCombo) {
      combinations.premium = {
        type: "Premium A/C Rooms",
        description: "Optimal combination of air-conditioned rooms for maximum comfort",
        combination: premiumCombo,
      };
    }

    if (budgetCombo) {
      combinations.budget = {
        type: "Budget-Friendly",
        description: "Most economical room combination available",
        combination: budgetCombo,
      };
    }

    if (alternativeCombo) {
      combinations.alternative = {
        type: "Compact & Economical",
        description: "Optimized for minimum cost and number of rooms",
        combination: alternativeCombo,
      };
    }

    if (Object.keys(combinations).length === 0) {
      errors.push({
        type: "NO_VALID_RATES",
        message: "Could not find room combinations with valid rates",
      });
    }

    return {
      combinations,
      errors,
    };
  } catch (error) {
    console.error("Unexpected error in findAvailableRoomCombinations:", error);
    errors.push({
      type: "UNEXPECTED_ERROR",
      message: "An unexpected error occurred while searching for rooms",
      details: error.message,
    });
    return {
      combinations: {},
      errors,
    };
  }
}
