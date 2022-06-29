// basic imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// additional imports
const cors = require('cors')


// basic middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// additional middlewares
app.use(cors())

//routers
const authRouter = require('./routes/auth');
const dataRouter = require('./routes/data');
app.use('/auth', authRouter);
app.use('/data', dataRouter);

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
