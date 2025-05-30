import "swiper/css";
import "swiper/css/navigation";

import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useEffect, useState } from "react";

import CustomProvider from "@/components/custom/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <CustomProvider>
      <Component {...pageProps} />
    </CustomProvider>
  );
}

export default MyApp;
