const indexGet = (req, res) => {
  res.render('index', { title: 'Home' });
};

const guitarsGet = (req, res) => {
  res.render('guitars', { title: 'Guitars' });
};

module.exports = {
  indexGet,
  guitarsGet,
};
