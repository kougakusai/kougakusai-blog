import Document, { Html, Head, Main, NextScript } from 'next/document';
import { existsGaId, GA_ID } from '../lib/gtag';
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
          <meta
            content="茨城大学の工学部による学園祭、こうがく祭を運営するこうがく祭実行委員会公式ブログです。活動内容等を発信していきます。"
            name="description"
          />
          <meta charSet="utf-8" />
          <meta property="og:url" content="https://kougakusai.github.io/kougakusai-blog/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="こうがく祭ブログ" />
          <meta
            property="og:description"
            content="茨城大学の工学部による学園祭、こうがく祭を運営するこうがく祭実行委員会公式ブログです。活動内容等を発信していきます。"
          />
          <meta property="og:site_name" content="こうがく祭実行委員会公式ブログ" />
          <meta
            property="og:image"
            content=" https://kougakusai.github.io/kougakusai-blog/og.jpg"
          />
          {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
