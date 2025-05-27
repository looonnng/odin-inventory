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

async function getGuitar(brand, guitarName) {
  const { rows } = await pool.query(
    "SELECT * FROM guitars WHERE brand = ($1) AND regexp_replace(name, ' ', '-', 'g') = ($2)",
    [brand, guitarName],
  );
  return rows;
}

async function addNewGuitar(brand, guitarName, shape) {
  await pool.query(
    'INSERT INTO guitars (name, brand, shape, img_src) VALUES ($1, $2, $3, $4)',
    [
      guitarName,
      brand,
      shape,
      `/public/images/guitars/new-guitar/${shape.replaceAll(' ', '-')}-outline.jpg`,
    ],
  );
}

module.exports = {
  getAllGuitars,
  getAllShapes,
  getAllBrands,
  getAllBrandProducts,
  getGuitar,
  addNewGuitar,
};
