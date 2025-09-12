import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, TextField, Button, Typography, Paper, Grid, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function Lookup() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(dayjs());
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    const clampedValue = Math.max(1, Math.min(50, value));
    setGuests(clampedValue);

    // Clear guest error if value is valid
    if (clampedValue >= 1 && clampedValue <= 50) {
      setErrors((prev) => ({ ...prev, guests: null }));
    }
  };

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    // Clear check-in error
    setErrors((prev) => ({ ...prev, checkIn: null }));
    // Clear check-out error if check-out is now valid
    if (checkOut && checkOut.isAfter(date)) {
      setErrors((prev) => ({ ...prev, checkOut: null }));
    }
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
    // Clear check-out error
    setErrors((prev) => ({ ...prev, checkOut: null }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (checkIn && checkOut && checkOut.isSameOrBefore(checkIn)) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }

    if (guests < 1 || guests > 50) {
      newErrors.guests = "Number of guests must be between 1 and 50";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Redirect to check-availability page with query parameters
      const params = new URLSearchParams({
        checkIn: checkIn.format("YYYY-MM-DD"),
        checkOut: checkOut.format("YYYY-MM-DD"),
        guests: guests.toString(),
      });

      router.push(`/check-availability?${params.toString()}`);
    }
  };

  return (
    <Box className="checkout-form-section wow slideInUp" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: "#495057", fontWeight: 600 }}>
                    Check-in Date
                  </Typography>
                  <DatePicker
                    value={checkIn}
                    onChange={handleCheckInChange}
                    disablePast
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: "outlined",
                        error: !!errors.checkIn,
                        helperText: errors.checkIn,
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "white",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "#495057",
                          },
                        },
                      },
                      popper: {
                        sx: {
                          "& .MuiPaper-root": {
                            backgroundColor: "white",
                            color: "#000",
                          },
                          "& .MuiPickersCalendarHeader-root": {
                            backgroundColor: "white",
                            color: "#000",
                          },
                          "& .MuiDayCalendar-root": {
                            backgroundColor: "white",
                          },
                          "& .MuiPickersDay-root": {
                            backgroundColor: "white",
                            color: "#000",
                            "&:hover": {
                              backgroundColor: "#f5f5f5",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#1976d2",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "#1565c0",
                              },
                            },
                            "&.MuiPickersDay-today": {
                              border: "1px solid #1976d2",
                              backgroundColor: "white",
                              color: "#000",
                            },
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: "#495057", fontWeight: 600 }}>
                    Check-out Date
                  </Typography>
                  <DatePicker
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    disablePast
                    minDate={checkIn ? checkIn.add(1, "day") : null}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: "outlined",
                        error: !!errors.checkOut,
                        helperText: errors.checkOut,
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "white",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "#495057",
                          },
                        },
                      },
                      popper: {
                        sx: {
                          "& .MuiPaper-root": {
                            backgroundColor: "white",
                            color: "#000",
                          },
                          "& .MuiPickersCalendarHeader-root": {
                            backgroundColor: "white",
                            color: "#000",
                          },
                          "& .MuiDayCalendar-root": {
                            backgroundColor: "white",
                          },
                          "& .MuiPickersDay-root": {
                            backgroundColor: "white",
                            color: "#000",
                            "&:hover": {
                              backgroundColor: "#f5f5f5",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#1976d2",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "#1565c0",
                              },
                            },
                            "&.MuiPickersDay-today": {
                              border: "1px solid #1976d2",
                              backgroundColor: "white",
                              color: "#000",
                            },
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: "#495057", fontWeight: 600 }}>
                    Number of Guests
                  </Typography>
                  <TextField
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={guests}
                    onChange={handleGuestsChange}
                    error={!!errors.guests}
                    helperText={errors.guests}
                    inputProps={{
                      min: 1,
                      max: 50,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="fas fa-users" style={{ color: "#6c757d" }}></i>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#495057",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", alignItems: "end" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      backgroundColor: "#007bff",
                      "&:hover": {
                        backgroundColor: "#0056b3",
                      },
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: "0 2px 4px rgba(0,123,255,0.3)",
                    }}
                  >
                    <i className="fas fa-search me-2"></i>
                    Check Availability
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </LocalizationProvider>
        </Paper>
      </Container>
    </Box>
  );
}
