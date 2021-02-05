import "../styles/globals.css";

import { AppProps } from "next/app";

export function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
