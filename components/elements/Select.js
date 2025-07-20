import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import SelectMUI from "@mui/material/Select";

const styles = {
  "& .MuiInputBase-root": {
    marginTop: "3px",
    width: "260px !important",
    fontSize: "12px",
    color: "var(--theme-color1)",

    "& .MuiSelect-nativeInput": {
      width: "100% !important",
      position: "absolute !important",
    },

    "& .MuiSvgIcon-root": {
      color: "var(--theme-color1)",
    },
  },

  "& .MuiInputBase-root::before": {
    border: "none !important",
  },

  "& .MuiInputBase-root::after": {
    border: "none !important",
  },
};

export default function Select(props) {
  const { options, ...rest } = props;

  const loopMenuItems = options?.map(({ label, value }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));

  return (
    <FormControl variant="standard" sx={styles}>
      <SelectMUI
        {...rest}
        MenuProps={{
          disableScrollLock: true,
          ...rest.MenuProps,
        }}
      >
        {loopMenuItems}
      </SelectMUI>
    </FormControl>
  );
}
