// make this page the same layout as the room details page

import Layout from "@/components/layout/Layout";
import { useState, useEffect, useCallback } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { findAvailableRoomCombinations } from "@/services/RatesService";
import { useRoomsService } from "@/hooks/useRoomsService";

export default function CheckAvailability() {
  const { roomsService, isReady } = useRoomsService();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [partySize, setPartySize] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  // Cleanup function to handle component unmounting
  useEffect(() => {
    return () => {
      setSearchResults(null);
      setError(null);
      setIsSearching(false);
    };
  }, []);

  const handleSearch = useCallback(
    async (e) => {
      e.preventDefault();

      // Don't proceed if already searching
      if (isSearching) return;

      setIsSearching(true);
      setError(null);
      setSearchResults(null);

      try {
        if (!isReady) {
          throw new Error("Room service is not ready");
        }

        const roomsData = roomsService.getRoomsByType();
        console.log("rooms by type", roomsData);
        if (!roomsData) {
          throw new Error("Unable to fetch room data");
        }

        const results = await findAvailableRoomCombinations(
          checkIn.format("YYYY-MM-DD"),
          checkOut.format("YYYY-MM-DD"),
          partySize,
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
    [checkIn, checkOut, partySize, roomsService, isReady]
  );

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
      <div className="room-combination-card">
        <div className="card">
          <div className="card-body">
            <div className="combination-header mb-4">
              <h5 className="card-title mb-2">{type}</h5>
              <p className="text-muted">{description}</p>
            </div>
            <div className="rooms-list mb-3">
              {combination.rooms.map((room, roomIndex) => (
                <div key={roomIndex} className="room-item mb-2 p-3 border rounded">
                  <h6 className="mb-2">{room.name}</h6>
                  <p className="mb-1">
                    <span className="text-muted">Max Occupancy:</span> {room.maxOccupancy} guests
                  </p>
                  <p className="mb-1">
                    <span className="text-muted">Rate:</span> {formatPrice(room.averageRate)}/night
                  </p>
                </div>
              ))}
            </div>
            <div className="total-info pt-3 border-top">
              <div className="d-flex justify-content-between align-items-center">
                <span>Total Capacity:</span>
                <strong>{combination.totalOccupancy} guests</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span>Total Rate:</span>
                <strong>{formatPrice(combination.totalRate)}/night</strong>
              </div>
              {combination.wastedCapacity > 0 && (
                <div className="text-muted small mt-2">
                  <i className="fas fa-info-circle me-1"></i>
                  This combination has {combination.wastedCapacity} extra bed(s)
                </div>
              )}
            </div>
            <button className="theme-btn btn-style-one w-100 mt-3">
              <span className="btn-title">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout headerStyle={1}>
      <section className="blog-details pt-120 pb-120">
        <div className="auto-container">
          <div className="title-box text-center mb-50">
            <div className="sec-title">
              <span className="sub-title">Find Your Perfect Stay</span>
              <h2>Check Room Availability</h2>
            </div>
          </div>

          <div className="availability-form">
            <form onSubmit={handleSearch}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="form-group">
                      <label className="form-label">Check-in Date</label>
                      <DatePicker
                        value={checkIn}
                        onChange={setCheckIn}
                        disablePast
                        className="form-control"
                        slotProps={{
                          textField: {
                            variant: "standard",
                            className: "form-control",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="form-group">
                      <label className="form-label">Check-out Date</label>
                      <DatePicker
                        value={checkOut}
                        onChange={setCheckOut}
                        disablePast
                        minDate={checkIn ? dayjs(checkIn).add(1, "day") : null}
                        className="form-control"
                        slotProps={{
                          textField: {
                            variant: "standard",
                            className: "form-control",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-30">
                    <div className="form-group">
                      <label className="form-label">Number of Guests</label>
                      <input
                        type="number"
                        className="form-control"
                        value={partySize}
                        onChange={(e) => setPartySize(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="theme-btn btn-style-one"
                      disabled={!checkIn || !checkOut || isSearching || !isReady}
                    >
                      <span className="btn-title">{isSearching ? "Searching..." : "Check Availability"}</span>
                    </button>
                  </div>
                </div>
              </LocalizationProvider>
            </form>
          </div>

          {error && (
            <div className="alert alert-danger mt-40" role="alert">
              {error}
            </div>
          )}

          {searchResults && (
            <div className="search-results mt-50">
              <h3 className="text-center mb-40">Available Room Combinations</h3>

              {Object.keys(searchResults.combinations).length === 0 ? (
                <div className="text-center">
                  <p>No available rooms found for your search criteria.</p>
                  <p>Please try different dates or adjust your party size.</p>
                </div>
              ) : (
                <div className="row">
                  {searchResults.combinations.premium && (
                    <div className="col-lg-4 col-md-6 mb-30">
                      {renderRoomCombination(searchResults.combinations.premium)}
                    </div>
                  )}
                  {searchResults.combinations.budget && (
                    <div className="col-lg-4 col-md-6 mb-30">
                      {renderRoomCombination(searchResults.combinations.budget)}
                    </div>
                  )}
                  {searchResults.combinations.alternative && (
                    <div className="col-lg-4 col-md-6 mb-30">
                      {renderRoomCombination(searchResults.combinations.alternative)}
                    </div>
                  )}
                </div>
              )}

              {searchResults.errors.length > 0 && (
                <div className="alert alert-warning mt-4">
                  <ul className="mb-0">
                    {searchResults.errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
