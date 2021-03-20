import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import englishMessages from "../locales/en.json";
import spanishMessages from "../locales/es.json";
import italianMessages from "../locales/it.json";
import "../styles/globals.css";

const getMessagesForLocale = (locale) => {
  switch (locale) {
    case "en": {
      return englishMessages;
    }
    case "es": {
      return spanishMessages;
    }
    default: {
      return italianMessages;
    }
  }
};

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={getMessagesForLocale(locale)}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
