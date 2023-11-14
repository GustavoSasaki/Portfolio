import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

const App = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
