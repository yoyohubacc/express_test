var express = require('express');
var router = express.Router();

var requireAuthentication = (req, res, next) => {
  if (req.session.user && req.cookies.yoyohub_user_sid) { next()
  } else { res.redirect('/login')
  }    
};

var requireAdminAuthentication = (req, res, next) => {
  if (req.session.user=='admin' && req.cookies.yoyohub_user_sid) { next()
  } else { res.redirect('/login')
  }    
};

// router.all(['/','/home','/item','/price','/shipping','/finance'],requireAuthentication)
// router.all(['/admin'],requireAdminAuthentication)

const logInOut = require('./logInOut')
router.use('/login',logInOut)

const index = require('./index')
const item = require('./item/index')
const price = require('./price/index')
const shipping = require('./shipping/index')
const finance = require('./finance/index')

router.use('/',index)
router.use('/home',index)
router.use('/item',item)
router.use('/price',price)
router.use('/shipping',shipping)
router.use('/finance',finance)

const admin = require('./admin/index')
router.use('/admin',admin)

module.exports = router;
