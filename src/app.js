const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');
// const apicache = require('apicache')

const app = express();
// const cache = apicache.middleware;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Midlewares

app.use(session({
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
}));
// app.use(cache('2 minutes'))

app.use(userLoggedMiddleware);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookies());
app.use(express.static("public"));
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
