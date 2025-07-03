
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB", 
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3B82F6", 
    },
    background: {
      default: "#1E293B", 
      paper: "#273549",
    },
  },
});
