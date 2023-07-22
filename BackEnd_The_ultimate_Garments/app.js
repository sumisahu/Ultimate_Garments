var createError = require('http-errors');
var express = require('express');
var cors= require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var subCategoryRouter = require('./routes/subcategory');
var productsRouter = require('./routes/products');
var sizeRouter = require('./routes/size');
var colorRouter = require('./routes/color');
var adminRouter = require('./routes/admin');
var userinterfaceRouter = require('./routes/userinterface');
var bannerimagesRouter = require('./routes/bannerimages');
var productpicturesRouter = require('./routes/productpictures');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/subcategory', subCategoryRouter);
app.use('/products', productsRouter);
app.use('/size', sizeRouter);
app.use('/color', colorRouter);
app.use('/admin', adminRouter);
app.use('/userinterface', userinterfaceRouter);
app.use('/bannerimages', bannerimagesRouter);
app.use('/productpictures', productpicturesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
