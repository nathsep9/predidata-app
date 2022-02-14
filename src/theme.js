import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
  spacing: 8,
});
