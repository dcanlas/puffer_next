import Layout from "@/components/layout/Layout";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { findAvailableRoomCombinations } from "@/services/RatesService";
import { useRoomsContext } from "@/hooks/RoomsContext";
import { Box, Container, Grid, Typography, Button, Alert } from "@mui/material";
import LookupForm from "@/components/custom/LookupForm";

export default function CheckAvailability() {
  const router = useRouter();
  const { roomsService, isReady } = useRoomsContext();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [partySize, setPartySize] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [hasAutoSearched, setHasAutoSearched] = useState(false);

  const handleSearch = useCallback(
    async (formData) => {
      // Don't proceed if already searching
      if (isSearching) return;

      // Extract values from form data
      const checkInDate = formData.checkIn;
      const checkOutDate = formData.checkOut;
      const guestCount = formData.guests;

      // Validate required values
      if (!checkInDate || !checkOutDate || !guestCount) {
        console.error("Missing required search parameters");
        return;
      }

      setIsSearching(true);
      setError(null);
      setSearchResults(null);

      try {
        if (!isReady) {
          throw new Error("Room service is not ready");
        }

        const roomsData = roomsService.getRoomsByType();
        if (!roomsData) {
          throw new Error("Unable to fetch room data");
        }
        const results = await findAvailableRoomCombinations(
          checkInDate.format("YYYY-MM-DD"),
          checkOutDate.format("YYYY-MM-DD"),
          guestCount,
          roomsData
        );

        // Only update state if the component is still mounted
        setSearchResults(results);
      } catch (err) {
        console.error("Error searching rooms:", err);
        setError(err.message || "An error occurred while searching for rooms");
      } finally {
        setIsSearching(false);
      }
    },
    [checkIn, checkOut, partySize, roomsService, isReady, isSearching]
  );

  // Handle URL parameters and auto-search in one useEffect
  useEffect(() => {
    if (router.isReady && router.query && !hasAutoSearched && isReady) {
      const { checkIn: checkInParam, checkOut: checkOutParam, guests: guestsParam } = router.query;

      if (checkInParam && checkOutParam && guestsParam) {
        // Parse URL parameters
        const checkInDate = dayjs(checkInParam);
        const checkOutDate = dayjs(checkOutParam);
        const guestCount = Math.max(1, Math.min(50, parseInt(guestsParam) || 1));

        // Validate dates and guest count
        if (
          checkInDate.isValid() &&
          checkOutDate.isValid() &&
          checkInDate.isBefore(checkOutDate) &&
          guestCount >= 1 &&
          guestCount <= 50
        ) {
          setCheckIn(checkInDate);
          setCheckOut(checkOutDate);
          setPartySize(guestCount);
          setHasAutoSearched(true);

          // Pass the parsed values directly to avoid state timing issues
          handleSearch({
            checkIn: checkInDate,
            checkOut: checkOutDate,
            guests: guestCount,
          });
        }
      }
    }
  }, [router.isReady, router.query, hasAutoSearched, isReady, handleSearch]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  const renderRoomCombination = (option) => {
    if (!option) return null;
    const { type, description, combination } = option;

    return (
      <Box className="room-combination-card">
        <Box className="card">
          <Box className="card-body">
            <Box className="combination-header mb-4">
              <Typography variant="h5" className="card-title mb-2">
                {type}
              </Typography>
              <Typography className="text-muted">{description}</Typography>
            </Box>
            <Box className="rooms-list mb-3">
              {combination.rooms.map((room, roomIndex) => (
                <Box key={roomIndex} className="room-item mb-2 p-3 border rounded">
                  <Typography variant="h6" className="mb-2">
                    {room.name}
                  </Typography>
                  <Typography className="mb-1">
                    <span className="text-muted">Max Occupancy:</span> {room.maxOccupancy} guests
                  </Typography>
                  <Typography className="mb-1">
                    <span className="text-muted">Rate:</span> {formatPrice(room.averageRate)}/night
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box className="total-info pt-3 border-top">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <span>Total Capacity:</span>
                <strong>{combination.totalOccupancy} guests</strong>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <span>Total Rate:</span>
                <strong>{formatPrice(combination.totalRate)}/night</strong>
              </Box>
              {combination.wastedCapacity > 0 && (
                <Typography className="text-muted small mt-2">
                  <i className="fas fa-info-circle me-1"></i>
                  This combination has {combination.wastedCapacity} extra bed(s)
                </Typography>
              )}
            </Box>
            <Button className="theme-btn btn-style-one w-100 mt-3">
              <span className="btn-title">Book Now</span>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Layout headerStyle={1}>
      <Box component="section" className="blog-details pt-120 pb-120">
        <Container>
          <Box className="title-box text-center mb-50">
            <Box className="sec-title">
              <span className="sub-title">Find Your Perfect Stay</span>
              <Typography variant="h2">Check Room Availability</Typography>
              {hasAutoSearched && (
                <Alert severity="info" sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
                  <i className="fas fa-info-circle me-2"></i>
                  Form pre-filled from your search. Results will appear automatically.
                </Alert>
              )}
            </Box>
          </Box>

          <LookupForm
            onSubmit={handleSearch}
            initialValues={{
              checkIn: checkIn,
              checkOut: checkOut,
              guests: partySize,
            }}
            submitButtonText={isSearching ? "Searching..." : "Search Rooms"}
            showTitle={false}
          />

          {error && (
            <Alert severity="error" className="mt-40">
              {error}
            </Alert>
          )}

          {searchResults && (
            <Box className="search-results mt-50">
              <Typography variant="h3" className="text-center mb-40">
                Available Room Combinations
              </Typography>

              {Object.keys(searchResults.combinations).length === 0 ? (
                <Box className="text-center">
                  <Typography>No available rooms found for your search criteria.</Typography>
                  <Typography>Please try different dates or adjust your party size.</Typography>
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {searchResults.combinations.premium && (
                    <Grid item lg={4} md={6} xs={12}>
                      {renderRoomCombination(searchResults.combinations.premium)}
                    </Grid>
                  )}
                  {searchResults.combinations.budget && (
                    <Grid item lg={4} md={6} xs={12}>
                      {renderRoomCombination(searchResults.combinations.budget)}
                    </Grid>
                  )}
                  {searchResults.combinations.alternative && (
                    <Grid item lg={4} md={6} xs={12}>
                      {renderRoomCombination(searchResults.combinations.alternative)}
                    </Grid>
                  )}
                </Grid>
              )}

              {searchResults.errors.length > 0 && (
                <Alert severity="warning" className="mt-4">
                  <ul className="mb-0">
                    {searchResults.errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </Alert>
              )}
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
}
