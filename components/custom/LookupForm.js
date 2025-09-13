import { Box, Container, TextField, Button, Typography, Paper, Grid, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useLookupForm from "@/hooks/useLookupForm";

// Common styles for form components
const textFieldStyles = {
  "& .MuiInputBase-input": {
    color: "#495057",
  },
  "& .MuiInputLabel-root": {
    color: "#6c757d",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#007bff",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#007bff",
    },
  },
};

const datePickerPopperStyles = {
  "& .MuiPaper-root": {
    backgroundColor: "white",
    color: "#212529",
  },
  "& .MuiPickersDay-root": {
    color: "#212529",
    "&.Mui-selected": {
      backgroundColor: "#1976d2",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.1)",
    },
  },
  "& .MuiPickersCalendarHeader-root": {
    color: "#212529",
  },
  "& .MuiPickersMonth-root": {
    color: "#212529",
  },
  "& .MuiPickersYear-root": {
    color: "#212529",
  },
};

const buttonStyles = {
  py: 2,
  px: 4,
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: 2,
  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
  "&:hover": {
    background: "linear-gradient(135deg, #0056b3 0%, #004085 100%)",
    boxShadow: "0 6px 20px rgba(0, 123, 255, 0.4)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  transition: "all 0.3s ease",
};

/**
 * Generic LookupForm Component
 *
 * A reusable form component for room availability lookup that can be used
 * across different pages with different submit behaviors.
 *
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback function called when form is submitted
 * @param {Object} props.initialValues - Initial form values { checkIn, checkOut, guests }
 * @param {string} props.submitButtonText - Text for the submit button (default: "Check Now")
 * @param {Object} props.sx - Additional styling for the container
 * @param {boolean} props.showTitle - Whether to show the form title (default: false)
 * @param {string} props.title - Title text to display (default: "Check Room Availability")
 */
export default function LookupForm({
  onSubmit,
  initialValues = {},
  submitButtonText = "Check Now",
  sx = {},
  showTitle = false,
  title = "Check Room Availability",
}) {
  const {
    checkIn,
    checkOut,
    guests,
    errors,
    handleCheckInChange,
    handleCheckOutChange,
    handleGuestsChange,
    validateForm,
  } = useLookupForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Call the provided onSubmit callback with form data
      onSubmit({
        checkIn,
        checkOut,
        guests,
      });
    }
  };

  return (
    <Box className="lookup-form-section wow slideInUp" sx={{ py: 4, ...sx }}>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {showTitle && (
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 600,
                color: "#2c3e50",
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              {title}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3} alignItems="center">
              {/* Check-in Date */}
              <Grid item xs={12} sm={6} md={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Check-in Date"
                    value={checkIn}
                    onChange={handleCheckInChange}
                    minDate={dayjs()}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.checkIn,
                        helperText: errors.checkIn,
                        sx: textFieldStyles,
                      },
                      popper: {
                        sx: datePickerPopperStyles,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Check-out Date */}
              <Grid item xs={12} sm={6} md={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Check-out Date"
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    minDate={checkIn ? checkIn.add(1, "day") : dayjs()}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.checkOut,
                        helperText: errors.checkOut,
                        sx: textFieldStyles,
                      },
                      popper: {
                        sx: datePickerPopperStyles,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Number of Guests */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Guests"
                  value={guests}
                  onChange={handleGuestsChange}
                  error={!!errors.guests}
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
                  sx={textFieldStyles}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={buttonStyles}
                  startIcon={<i className="fas fa-search"></i>}
                >
                  {submitButtonText}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
