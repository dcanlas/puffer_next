import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { RoomsProvider } from "@/hooks/RoomsContext";

export default function CustomProvider({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RoomsProvider>{children}</RoomsProvider>
    </LocalizationProvider>
  );
}
