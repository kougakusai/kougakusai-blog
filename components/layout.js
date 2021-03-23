import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Embed } from 'theme-ui';
import Footer from 'src/comonents/organisms/footer';

const prefix = '/kougakusai-blog';

export default function Layout({ children }, props) {
  // const { pathname } = useRouter();
  // const isRoot = pathname === '/';

  // const shortcodes = { Embed };
  // const header = isRoot ? (
  //   <h1 className="mb-16">
  //     <Link href="/bloglist">
  //       <a className="text-6xl font-black text-black no-underline bg-gray-300">
  //         こうがく祭HP村技術ブログ
  //       </a>
  //     </Link>
  //   </h1>
  // ) : (
  //   <h1 className="mb-16">
  //     <Link href="/bloglist">
  //       <a className="text-6xl font-black text-black no-underline bg-gray-300">
  //         こうがく祭HP村技術ブログ
  //       </a>
  //     </Link>
  //   </h1>
  // );

  return (
    <div className="">
      <header>
        <div className="bg-hero-pattern w-full h-130 sm:h-315 bg-cover bg-center bg-no-repeat"></div>
        {/* <img src="/img/header.jpg" className="w-full text-center h-auto " /> */}
        <nav className="flex justify-between bg-k-indigo justify-between flex-wrap px-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            {/* <svg
              className="h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
            <Link href="/">
              <img src={prefix + '/img/logo_white.svg'} width="100" height="100" />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded bg-transparent text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg
                className="h-3 w-3 bg-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                記事一覧
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                当サイトについて
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
              >
                お問い合わせ
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>
      <MDXProvider components={shortcodes}>
        <main {...props} />
      </MDXProvider>

      <main className="container mx-auto">{children}</main>
      {/* <footer>
        <Link href="/bloglist">
          <p className="text-right">
            <a className="font-black text-black ">記事一覧</a>
          </p>
        </Link>
        <Link href="/">
          <p className="text-right">
            <a className="font-black text-black">ホーム</a>
          </p>
        </Link>
      </footer> */}
      <Footer />
    </div>
  );
}
