const withMdxEnhanced = require('next-mdx-enhanced');
const withImages = require('next-images');
const createSlugFromFile = require('./src/utils/create-slug');
const blogReadingTime = require('./src/utils/reading-time');

module.exports = withMdxEnhanced({
  layoutPath: 'src/components/layouts/BlogPostLayout',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [],
  rehypePlugins: [require('mdx-prism')],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      slug: createSlugFromFile(frontMatter),
      readingTime: blogReadingTime(mdxContent)
    }),
    phase: 'both'
  },
  reExportDataFetching: false
})(
  withImages({
    esModule: true
  })
);
