const indexController = (req, res) => {
  res.render('index', { title: 'Home' });
};


module.exports = {
  indexController
}