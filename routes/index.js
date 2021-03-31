var express = require('express');
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
router.get('/', (req, res, next)=>{
  baseVar.username = req.session.user || baseVar.username;
  
  res.render('index.html',baseVar)
});




module.exports = router;