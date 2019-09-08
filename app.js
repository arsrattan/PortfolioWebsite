//NPM module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

//Local module imports
var indexRouter = require('./routes/index');
let contactRouter = require('./routes/contact');
let projectsRouter = require('./routes/projects')

const port = 3000;

//Set view engine structure and type
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Specify the routing for specific endpoints
app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter)

//All other endpoints should return a 404: Not Found
app.use(function(req, res, next) {
  next(createError(404));
});

//Start the app, listening on the specified port
app.listen(port, () => console.log('Now listening on port 3000...'));

module.exports = app;
