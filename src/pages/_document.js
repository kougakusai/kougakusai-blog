import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { TypographyStyle } from 'react-typography';
// import typography from '../utils/typography';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <html>
          <Head>{/* <TypographyStyle typography={typography} /> */}</Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </Html>
    );
  }
}
