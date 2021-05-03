import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Head from 'next/head';

import Layout from '../../../components/layout';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ content, frontmatter }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Layout>
        <article className="">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={content}
            components={{ code: CodeBlock }}
          />
        </article>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fm = require('front-matter');
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.mdx'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const formattedDate = data.updatedAt;

  const frontmatter = {
    ...data,
    date: formattedDate,
  };
  return {
    props: {
      content: `${data.updatedAt}\n\n## ${data.title}\n${content}`,
      frontmatter,
    },
  };
}
