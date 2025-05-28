const { Router } = require('express');
const indexController = require('../controllers/indexController');
const guitarRouter = require('./guitarRouter');
const shapeRouter = require('./shapeRouter');
const indexRouter = Router();

// indexRouter.get('/getAllGuitars', indexController.indexGetAll);
indexRouter.get('/', indexController.indexGet);
indexRouter.get('/add', indexController.addNewGet);
indexRouter.post('/add', indexController.addNewPost);
indexRouter.get('/guitars', indexController.guitarsGet);
indexRouter.get('/guitars/:brand', guitarRouter);
indexRouter.get('/:brand/:guitarName', guitarRouter);
indexRouter.post('/:brand/:guitarName', guitarRouter);
indexRouter.get('/shapes', shapeRouter);

module.exports = indexRouter;
