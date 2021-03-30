var express = require('express');
var router = express.Router();
var baseVar = {
  'username':'',
  'navAct':{
      'navItem':"active", //disabled active none
      'navPrice':'',
      'navShip':'',
      'navFinance':'',
      'navInventory':'',
      'navamdin':''
    }
}

/* price index page */
router.get('/', function(req, res, next) {
  baseVar.username = req.session.user;
  res.render('price/index.html',baseVar)
});


/* requrie page*/
router.get('/modify',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/modify.html',baseVar)
})
router.get('/margin',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/margin.html',baseVar)
})
router.get('/marketfee',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/marketfee.html',baseVar)
})
router.get('/paymentfee',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/paymentfee.html',baseVar)
})
router.get('/translatefee',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/translatefee.html',baseVar)
})
router.get('/shippingfee',(req,res,next)=>{
  baseVar.username = req.session.user;
  res.render('price/shippingfee.html',baseVar)
})


module.exports = router;