import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Header } from "../components/Header";
import { colorTheme } from "../libs/colorTheme";
import { useGTM } from "../libs/useGTM";

function MyApp({ Component, pageProps }: AppProps) {
  colorTheme.useInit();
  useGTM();

  return (
    <div className="container py-[2rem]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
