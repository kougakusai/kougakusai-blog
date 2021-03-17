import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../comonents/atoms/icon.tsx';

export default function Hom({ posts }) {
  return (
    <div>
      <Head>
        <title>記事</title>
      </Head>
      <Layout>
        <div className="flex flex-row text-center items-center">
          <Image src="/img/titleDeco.svg" height={50} width={50} className="inline-block" />
          <h2 className="ml-2 m-0 inline-block">記事一覧</h2>
        </div>
        <hr className="mb-2"></hr>
        {posts.map(({ frontmatter: { title, description, updatedAt }, slug }) => (
          <article key={slug}>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <header className="my-2">
                  <h3 className="m-0">
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a className="text-xl font-semibold text-k-black no-underline hover:no-underline">
                        {title}
                      </a>
                    </Link>
                  </h3>
                </header>
                <section className="flex flex-row flex-nowrap mb-4 text-xl">
                  <p className="m-0 text-k-darkgray">{updatedAt}</p>
                  <p className="ml-8 m-0 text-k-pink">{description}</p>
                </section>
              </div>
              <div className="height-8 width-8 ml-8 border-k-darkgray border-t-4 border"></div>
            </div>
            <hr className="mb-2"></hr>
          </article>
        ))}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`content/posts/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const formattedDate = data.updatedAt;

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.mdx', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
