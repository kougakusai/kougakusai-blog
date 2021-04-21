import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { TypographyStyle } from 'react-typography';
// import typography from '../utils/typography';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <TypographyStyle typography={typography} /> */}
          <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
