import "swiper/css";
import "swiper/css/navigation";

import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../constants/theme";

import CustomProvider from "@/components/custom/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomProvider>
        <Component {...pageProps} />
      </CustomProvider>
    </ThemeProvider>
  );
}

export default MyApp;
