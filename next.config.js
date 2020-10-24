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
  }
});

/*
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
};
*/
