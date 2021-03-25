var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var path = require('path');
const express = require('express');
var session = require('express-session');

const app = express();
const port = process.env.PORT || 33333;

// var morgan = require('morgan');
// app.use(morgan('dev'));

app.use(express.json());
app.use(express.Router({caseSensitive: 'Enable'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  key: 'yoyohub_user_sid',
  secret: 'yzNGZ@?Tn8&*&wRH=3+>',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 10800000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.yoyohub_user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/router')
app.use('/',router)

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})