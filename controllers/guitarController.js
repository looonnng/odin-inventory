const db = require('../db/queries');
require('dotenv').config();

const brandProductsGet = async (req, res) => {
  const brand = req.params.brand;
  const brandGuitars = await db.getAllBrandProducts(brand);

  res.render('products', { title: brand.toUpperCase(), guitars: brandGuitars });
};

const guitarDelete = async (req, res) => {
  const brand = req.params.brand;
  const guitarName = req.params.guitarName;
  const userInput = req.body.confirmPassword;

  if (userInput === process.env.PGPASSWORD) {
    await db.deleteGuitar(brand, guitarName);
    res.redirect('/');
  } else {
    res.redirect(req.originalUrl);
  }
};

const guitarGet = async (req, res) => {
  const brand = req.params.brand;
  const guitarName = req.params.guitarName;

  const guitar = await db.getGuitar(brand, guitarName);
  res.render('guitar', {
    title: guitarName.toUpperCase(),
    guitar: guitar[0],
  });
};

module.exports = {
  brandProductsGet,
  guitarGet,
  guitarDelete,
};
