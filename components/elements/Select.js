import MenuItem from "@mui/material/MenuItem";
import SelectMUI from "@mui/material/Select";

const styles = {};

export default function Select(props) {
  const { options, ...rest } = props;

  const loopMenuItems = options?.map(({ label, value }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));

  return <SelectMUI {...rest}>{loopMenuItems}</SelectMUI>;
}
