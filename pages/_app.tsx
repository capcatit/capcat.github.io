import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} /> // eslint-disable-line react/jsx-props-no-spreading
);
