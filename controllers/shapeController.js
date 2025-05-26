const db = require('../db/queries');

const shapesGet = async (req, res) => {
  const shapes = await db.getAllShapes();
  res.render('shapes', { title: 'Shapes', shapes: shapes });
};

module.exports = {
  shapesGet,
};
