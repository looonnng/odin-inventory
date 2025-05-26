const { Router } = require('express');
const guitarController = require('../controllers/guitarController');
const guitarRouter = Router();

guitarRouter.get('/guitars/:brand', guitarController.brandProductsGet);
guitarRouter.get('/:brand/:guitarName', guitarController.guitarGet);

module.exports = guitarRouter;
