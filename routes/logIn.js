var express = require('express');

const mg = require('./modules/mongodb')
var logindb = new mg('login')

var router = express.Router();

router.get('/', (req, res, next)=>{
  res.render('login.html')
});

router.post('/',(req,res,next)=>{
  logindb.findOne('users',req.body,(err,rst)=>{
    if(rst==null){
      res.redirect('/login'); 
    }else{
      req.session.user=rst.identity;
      res.redirect('/');
    }
  })
})

module.exports = router;
