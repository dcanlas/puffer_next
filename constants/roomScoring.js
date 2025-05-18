// Room types
export const ROOM_TYPES = {
  AC: ["standard-room", "family-room"],
};

// Scoring weights for different optimization strategies
export const SCORING_WEIGHTS = {
  premium: {
    NO_AC_PENALTY: 1000000,
    MIXED_AC_PENALTY: 500000,
  },
  mixed: {
    ROOM_COUNT_WEIGHT: 10000,
  },
  alternative: {
    COST_WEIGHT: 2,
    ROOM_COUNT_WEIGHT: 1000,
    WASTED_CAPACITY_WEIGHT: 100,
    UNDER_CAPACITY_WEIGHT: 2000,
  },
};
