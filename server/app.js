// basic imports
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();

// additional imports

// var cors = require('cors')


// basic middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// additional middlewares
// app.use(cors());

//routers
let authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// ERR handlers
  // 404
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // err handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
app.listen(3006)
module.exports = app;
