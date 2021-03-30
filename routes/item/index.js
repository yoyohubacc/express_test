var express = require('express');
var mongo = require('../modules/mongodb')

var router = express.Router();
var baseVar = {
  'username':'test',
  'navAct':{
      'navItem':"active", //disabled active none
      'navPrice':'',
      'navShip':'',
      'navFinance':'',
      'navInventory':'',
      'navamdin':''
    },
    'navUndAct':{
      'nItemSum':'',
      'nItemReq':'',
      'nItemDet':'',
      'nItemDes':'',
      'nItemIma':'',
      'nItemLan':''
    }
}

/* item page. */
router.get('/', function(req, res, next) {
  baseVar.username = req.session.user || baseVar.username;

  res.render('item/index.html',baseVar)
});



router.post('/',(req,res,next)=>{
  // console.log(req.body.fetch)
  res.json({'res':101})
})
router.put('/',(req,res,next)=>{
  res.json({'res':102})
})


/* requrie page*/
router.get('/require',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  res.render('item/require.html',baseVar)
})
router.get('/detail',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  res.render('item/detail.html',baseVar)
})
router.get('/description',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  res.render('item/description.html',baseVar)
})
router.get('/image',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  res.render('item/image.html',baseVar)
})
router.get('/language',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  res.render('item/language.html',baseVar)
})

module.exports = router;
