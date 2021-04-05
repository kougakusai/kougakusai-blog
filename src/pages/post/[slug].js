import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Layout from '../../../components/layout';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
      <article className="mx-auto w-3/4 mb-10">
        <ReactMarkdown escapeHtml={false} source={content} renderers={{ code: CodeBlock }} />
      </article>
    </Layout>
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
