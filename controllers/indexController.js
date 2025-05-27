const db = require('../db/queries');
const { copy } = require('../routes/guitarRouter');

const indexGet = (req, res) => {
  res.render('index', { title: 'Home' });
};

const guitarsGet = async (req, res) => {
  const guitars = await db.getAllGuitars();
  const brands = await db.getAllBrands();
  res.render('guitars', { title: 'Guitars', guitars: guitars, brands: brands });
};

const indexGetAll = async (req, res) => {};

const addNewGet = async (req, res) => {
  res.render('addNew', { title: 'New Guitar' });
};

const addNewPost = async (req, res) => {
  db.addNewGuitar(
    req.body.guitarBrand,
    req.body.guitarName,
    req.body.guitarShape,
  );

  res.redirect('/');
};

module.exports = {
  indexGet,
  addNewGet,
  addNewPost,
  guitarsGet,
  indexGetAll,
};
