const blogReadingTime = (text = '') => {
  const minutes = Math.ceil(text.split(/s/g).length / 250);
  return minutes + ' min';
};

module.exports = blogReadingTime;
