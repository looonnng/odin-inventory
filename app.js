const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const app = express();

// set default template engine
app.set('view engine', 'ejs');

// set views for error and 404 pages
app.set('views', path.join(__dirname, 'views'));

// serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));

app.get('/', indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
