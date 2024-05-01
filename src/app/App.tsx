//Modules Imports
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

//File imports
import '../styles/App.css'
import '../styles/index.css'
import theme from '../configs/mui/theme'
import { store } from "../store/store.init";
import SplashScreen from "../pages/landing-page/SplashScreen";
import KnowUs from "../pages/landing-page/KnowUs";

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/knowus" element={<KnowUs />} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
