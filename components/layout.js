import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Embed } from 'theme-ui';

export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === '/';

  const shortcodes = { Embed };
  const header = isRoot ? (
    <h1 className="mb-16">
      <Link href="/bloglist">
        <a className="text-6xl font-black text-black no-underline bg-gray-300">
          こうがく祭HP村技術ブログ
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-16">
      <Link href="/bloglist">
        <a className="text-6xl font-black text-black no-underline bg-gray-300">
          こうがく祭HP村技術ブログ
        </a>
      </Link>
    </h1>
  );

  return (
    <div className="max-w-screen-lg px-10 py-10 mx-auto">
      <header>{header}</header>
      <MDXProvider components={shortcodes}>
        <main {...props} />
      </MDXProvider>

      <main>{children}</main>
      <footer>
        <Link href="/bloglist">
          <p class="text-right">
            <a className="font-black text-black ">記事一覧</a>
          </p>
        </Link>
        <Link href="/">
          <p class="text-right">
            <a className="font-black text-black">ホーム</a>
          </p>
        </Link>
      </footer>
    </div>
  );
}
