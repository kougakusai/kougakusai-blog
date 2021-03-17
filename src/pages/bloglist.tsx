import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Hom({ posts }) {
  return (
    <div>
      <Head>
        <title>記事</title>
      </Head>
      <Layout>
        {posts.map(({ frontmatter: { title, description, updatedAt }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className="mb-2">
                <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                  <a className="text-3xl font-semibold text-red-500 no-underline">{title}</a>
                </Link>
              </h3>
              <p className="mb-2">{updatedAt}</p>
            </header>
            <section>
              <p className="mb-20">{description}</p>
            </section>
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
