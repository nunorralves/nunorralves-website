const blogReadingTime = (slug, text = '') => {
  const minutes = Math.ceil(text.split(' ').length / 230);
  // console.log(
  //   'SLUG // LENGHT:',
  //   slug,
  //   text.split(' '),
  //   text.split(' ').length,
  //   Math.ceil(text.split(' ').length),
  //   Math.ceil(text.split(/s/g).length),
  //   minutes
  // );
  return minutes + ' min';
};

module.exports = blogReadingTime;
