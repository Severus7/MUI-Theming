import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        secondary: {
          "&:hover": {
            color: "white",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: dangerColor,
          marginBottom: 50,
        },
      },
    },
  },
});

export default customTheme;
