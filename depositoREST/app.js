var createError = require('http-errors');
var http = require('http')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

//const session = require('express-session')
//const FileStore = require('session-file-store')(session)
const passport = require('passport')

var url = 'mongodb://localhost:27017/bebidaPlace'

//CONECTANDO COM O BD
const connection = mongoose.connect(url)
connection.then((db) => {
  console.log('conectado ao mongodb')
}).catch(console.log)

var bebidasRouter = require('./routes/bebidasRouter')
var promosRouter = require('./routes/promosRouter')
var combosRouter = require('./routes/combosRouter')
var usersRouter = require('./routes/usersRouter')

var porta = 3000

var app = express();
//AUTENTICAÇÃO
app.use(passport.initialize())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', bebidasRouter); não colocar isso

app.use('/user', usersRouter)
app.use('/bebidas', bebidasRouter);
app.use('/promos', promosRouter);
app.use('/combos', combosRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
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
