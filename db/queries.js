const pool = require('./pool');

async function getAllGuitars() {
  const { rows } = await pool.query('SELECT * FROM guitars');
  return rows;
}

async function getAllShapes() {
  const { rows } = await pool.query('SELECT * FROM body_shapes');
  return rows;
}


async function getAllBrands() {
  const { rows } = await pool.query('SELECT brand FROM brands');
  return rows;
}

async function getAllBrandProducts(brand) {
  const { rows } = await pool.query(
    'SELECT * FROM guitars WHERE brand = ($1)',
    [brand],
  );
  return rows;
}

module.exports = {
  getAllGuitars,
  getAllShapes,
  getAllBrands,
  getAllBrandProducts
};
