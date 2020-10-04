const createSlugFromFile = postMetadata => {
  const slug = postMetadata.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  return slug;
};

module.exports = createSlugFromFile;
