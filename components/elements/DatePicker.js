import dayjs from "dayjs";

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

const today = dayjs();

export default function DatePicker(props) {
  const { defaultValue, ...rest } = props;

  return (
    <DatePickerMUI
      defaultValue={defaultValue === "today" ? today : dayjs(defaultValue)}
      sx={styles}
      {...rest}
    />
  );
}

export { today };
