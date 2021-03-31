var express = require('express');
var mongo = require('../modules/mongodb')

var router = express.Router();
var baseVar = {
  'username':'test',
  'navAct':{
      'navItem':'', //disabled active none
      'navPrice':'',
      'navShip':'',
      'navFinance':'',
      'navInventory':'',
      'navamdin':''
    },
    'navUndAct':{
      'nItemSum':'',
      'nItemSer':'',
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
  baseVar.navUndAct.nItemSum = 'active';
  res.render('item/index.html',baseVar)
});



// router.post('/',(req,res,next)=>{
//   // console.log(req.body.fetch)
//   res.json({'res':101})
// })
// router.put('/',(req,res,next)=>{
//   res.json({'res':102})
// })


/* requrie page*/
router.get('/search',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemSer = 'active';
 
  res.render('item/search.html',baseVar)
})
router.get('/require',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemReq = 'active';
  res.render('item/require.html',baseVar)
})
router.get('/detail',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemDet = 'active';
  res.render('item/detail.html',baseVar)
})
router.get('/description',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemDes = 'active';
  res.render('item/description.html',baseVar)
})
router.get('/image',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemIma = 'active';
  res.render('item/image.html',baseVar)
})
router.get('/language',(req,res,next)=>{
  baseVar.username = req.session.user || baseVar.username;
  baseVar.navUndAct.nItemLan = 'active';
  res.render('item/language.html',baseVar)
})

module.exports = router;
