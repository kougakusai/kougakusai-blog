import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
      <Head>
        <title>nexst</title>
      </Head>
      <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
      <p className="mb-2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequatur
        eius hic ipsam nostrum omnis optio! Doloribus quaerat quis ratione? At, maiores voluptas?
        Eveniet odio omnis repellendus sapiente voluptatibus.
      </p>
      <button className="btn-blue">Start!!</button>
      <p className="mb-2 text-center">↓↓↓↓</p>
      <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
        <Link href="/bloglist">
          <a>記事のサンプル</a>
        </Link>
      </button>
    </section>
  );
};

export default Home;
