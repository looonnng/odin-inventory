const indexGet = (req, res) => {
  res.render('index', { title: 'Home' });
};

const productsGet = (req, res) => {
  res.render('productsPage', { title: 'Products' });
};

module.exports = {
  indexGet,
  productsGet,
};
