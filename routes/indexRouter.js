const { Router } = require('express');
const  indexController  = require('../controllers/indexController');
const indexRouter = Router();

indexRouter.get('/', indexController.indexGet);
indexRouter.get('/products', indexController.productsGet)

module.exports = indexRouter;
