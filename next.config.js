// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PROJECT_NAME' : '',

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/PROJECT_NAME' : '',
  },
};
/* module.exports = withTypescript(
  withMdxFm(
    withSass({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    }),
  ),
);
 */
