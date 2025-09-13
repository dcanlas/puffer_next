import { useState } from "react";
import dayjs from "dayjs";

const useLookupForm = (initialValues = {}) => {
  const [checkIn, setCheckIn] = useState(() => {
    if (initialValues.checkIn && dayjs(initialValues.checkIn).isValid()) {
      return dayjs(initialValues.checkIn);
    }
    return dayjs();
  });
  const [checkOut, setCheckOut] = useState(() => {
    if (initialValues.checkOut && dayjs(initialValues.checkOut).isValid()) {
      return dayjs(initialValues.checkOut);
    }
    return null;
  });
  const [guests, setGuests] = useState(initialValues.guests || 1);
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
    // Ensure we always store a valid dayjs object
    const dayjsDate = dayjs(date);
    if (dayjsDate.isValid()) {
      setCheckIn(dayjsDate);
      // Clear check-in error
      setErrors((prev) => ({ ...prev, checkIn: null }));
      // Clear check-out error if check-out is now valid
      if (checkOut && checkOut.diff(dayjsDate) > 0) {
        setErrors((prev) => ({ ...prev, checkOut: null }));
      }
    }
  };

  const handleCheckOutChange = (date) => {
    // Ensure we always store a valid dayjs object or null
    if (date) {
      const dayjsDate = dayjs(date);
      if (dayjsDate.isValid()) {
        setCheckOut(dayjsDate);
        // Clear check-out error
        setErrors((prev) => ({ ...prev, checkOut: null }));
      }
    } else {
      setCheckOut(null);
      setErrors((prev) => ({ ...prev, checkOut: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (checkIn && checkOut && (checkOut.isSame(checkIn) || checkOut.isBefore(checkIn))) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }

    if (guests < 1 || guests > 50) {
      newErrors.guests = "Number of guests must be between 1 and 50";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setCheckIn(dayjs());
    setCheckOut(null);
    setGuests(1);
    setErrors({});
  };

  const setFormValues = (values) => {
    if (values.checkIn && dayjs(values.checkIn).isValid()) {
      setCheckIn(dayjs(values.checkIn));
    }
    if (values.checkOut && dayjs(values.checkOut).isValid()) {
      setCheckOut(dayjs(values.checkOut));
    }
    if (values.guests) {
      setGuests(values.guests);
    }
  };

  return {
    // Form state
    checkIn,
    checkOut,
    guests,
    errors,

    // Form handlers
    handleCheckInChange,
    handleCheckOutChange,
    handleGuestsChange,

    // Form utilities
    validateForm,
    resetForm,
    setFormValues,
  };
};

export default useLookupForm;
