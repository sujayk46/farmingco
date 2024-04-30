import { createTheme } from "@mui/material/styles";

//color  constants
const primaryColor = "#F48932";
const secondaryColor = "#0FA157";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        }
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
    },
});

export default theme;