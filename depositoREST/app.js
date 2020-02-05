var createError = require('http-errors');
var http = require('http')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bebidasRouter = require('./routes/bebidas');
var promosRouter = require('./routes/promos');
var combosRouter = require('./routes/combos')

var porta = 3000
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bebidasRouter);
app.use('/bebidas', bebidasRouter);
app.use('/promos', promosRouter);
app.use('/combos', combosRouter)


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

const servidor = http.createServer(app)

servidor.listen(porta, () => {
console.log(`servidor escutando em http://localhost:${porta}/`)
})

module.exports = app;
