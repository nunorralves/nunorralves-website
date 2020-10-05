const createSlugFromFile = postMetadata => {
  const slug = postMetadata.__resourcePath
    .replace(new RegExp('blog/(en|pt)/'), '')
    .replace('.mdx', '');
  console.log('SLUG:', slug);
  return slug;
};

module.exports = createSlugFromFile;
