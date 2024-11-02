import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";

const styles = {
  "& .MuiInputBase-root": {
    marginBottom: "-2px",
    padding: 0,

    "& fieldset": {
      border: "none",
      padding: 0,
    },

    "& .MuiInputBase-input": {
      padding: 0,
      width: "232px !important",
    },

    "& .MuiInputAdornment-root": {
      marginLeft: 0,

      "& .MuiIconButton-root": {
        color: "var(--theme-color1)",
      },
    },
  },
};

export default function DatePicker() {
  return <DatePickerMUI sx={styles} />;
}
