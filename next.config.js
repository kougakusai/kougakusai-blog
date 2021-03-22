// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

module.exports = {
  basePath: '/kougakusai-blog',
  assetPrefix: '/kougakusai-blog/',
};
/* module.exports = withTypescript(
  withMdxFm(
    withSass({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    }),
  ),
);
 */
