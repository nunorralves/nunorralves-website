const createSlugFromFile = postMetadata => {
  const slug = postMetadata.__resourcePath
    .replace(new RegExp('blog/'), '')
    .replace('.mdx', '');
  // console.log('SLUG:', slug);
  return slug;
};

module.exports = createSlugFromFile;
