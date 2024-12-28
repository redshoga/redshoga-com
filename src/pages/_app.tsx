import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { colorTheme } from "@/libs/colorTheme";
import { useGTM } from "@/libs/useGTM";
import { MetaTag } from "@/components/commons/MetaTag";

function MyApp({ Component, pageProps }: AppProps) {
  colorTheme.useInit();
  useGTM();

  return (
    <>
      <MetaTag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
