var express = require('express');
var router = express.Router();

var requireAuthentication = (req, res, next) => {
  if (req.session.user && req.cookies.yoyohub_user_sid) { next() }
  else { res.redirect('/login') }
};

var requireAdminAuthentication = (req, res, next) => {
  if (req.session.user=='admin' && req.cookies.yoyohub_user_sid) { next() }
  else { res.redirect('/login') }
};

//login check allow
// router.all(/\/(?!admin)(?!login)\w*/g,requireAuthentication)
// router.all('/admin',requireAdminAuthentication)

const logIn = require('./logIn')
router.use('/login',logIn)

const item = require('./item/index')
router.use('/item',item)

const index = require('./index')

const price = require('./price/index')
const shipping = require('./shipping/index')
const finance = require('./finance/index')
router.use('/',index)
router.use('/home',index)

router.use('/price',price)
router.use('/shipping',shipping)
router.use('/finance',finance)

const admin = require('./admin/index')
router.use('/admin',admin)

router.use((req, res, next)=>{
  res.status(404);
  res.render('404.html');
});

module.exports = router;
