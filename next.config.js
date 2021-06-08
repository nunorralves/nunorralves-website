const withMdxEnhanced = require('next-mdx-enhanced');
const withImages = require('next-images');
const createSlugFromFile = require('./src/utils/create-slug');
const blogReadingTime = require('./src/utils/reading-time');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts/BlogPostLayout',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      slug: createSlugFromFile(frontMatter),
      readingTime: blogReadingTime(createSlugFromFile(frontMatter), mdxContent)
    }),
    phase: 'both'
  },
  reExportDataFetching: false
})({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }

    return config;
  },
  withImages: {
    esModule: true
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            // value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
            value: 'GET'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ];
  }
});
