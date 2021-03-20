import 'src/styles/globals.css';

// import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'typeface-lato';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
