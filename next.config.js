// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

// module.exports = {
//   future: {
//     webpack5: true,
//   },
// };
/* module.exports = withTypescript(
  withMdxFm(
    withSass({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    }),
  ),
);
 */
