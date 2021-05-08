import 'src/styles/globals.css';
import * as gtag from '../lib/gtag';
import usePageView from '../hooks/usePageView';
// import 'typeface-lato';

export default function MyApp({ Component, pageProps }) {
  usePageView();

  return <Component {...pageProps} />;
}
