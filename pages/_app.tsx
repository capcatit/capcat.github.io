import React from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} /> // eslint-disable-line react/jsx-props-no-spreading
);

export default App;
