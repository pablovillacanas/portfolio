import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
