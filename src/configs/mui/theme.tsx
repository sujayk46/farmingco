import { createTheme } from "@mui/material/styles";
import { THEME_COLORS } from "../../utils/app.constants";


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: THEME_COLORS.primary,
    },
    secondary: {
      main: THEME_COLORS.secondary,
    },
  },
  typography: {
    fontFamily: "Roboto, Montserrat, Arial, sans-serif",
    fontWeightLight: 300, // Light
    fontWeightRegular: 400, // Regular
    fontWeightMedium: 500, // Medium
    fontWeightBold: 700, // Bold
  },
  components: {
    // Customize styles for specific components
    MuiButton: {
      styleOverrides: {
        root: {
          // Default button style
          color: "white",
          textTransform: "none",
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: THEME_COLORS.primary,
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            // Contained primary button style
            backgroundColor: THEME_COLORS.primary,
            color: "white",
            "&:hover": {
              backgroundColor: THEME_COLORS.secondary,
            },
          },
        },
        {
            props: { variant: "contained", color: "secondary" },
            style: {
              // Contained primary button style
              backgroundColor: THEME_COLORS.secondary,
              color: "white",
              "&:hover": {
                backgroundColor: THEME_COLORS.primary,
              },
            },
          },
      ],
    },
  },
});

export default theme;
