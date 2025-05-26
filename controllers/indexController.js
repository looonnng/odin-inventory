const db = require('../db/queries');

const indexGet = (req, res) => {
  res.render('index', { title: 'Home' });
};

const guitarsGet = async (req, res) => {
  const guitars = await db.getAllGuitars();
  const brands = await db.getAllBrands();
  res.render('guitars', { title: 'Guitars', guitars: guitars, brands: brands });
};

const indexGetAll = async (req, res) => {};

module.exports = {
  indexGet,
  guitarsGet,
  indexGetAll,
};
