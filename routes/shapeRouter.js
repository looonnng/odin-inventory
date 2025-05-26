const { Router } = require('express');
const shapeController = require('../controllers/shapeController');
const shapeRouter = Router();

shapeRouter.get('/shapes', shapeController.shapesGet);

module.exports = shapeRouter;
