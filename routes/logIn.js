var express = require('express');

const mg = require('./modules/mongodb')
var userdb = new mg('user')

var router = express.Router();

router.get('/', (req, res, next)=>{
  
  res.json({'login':1111})
});
router.get('/in', (req, res, next)=>{
  req.session.user='userName'
  res.redirect('/')
});
router.get('/out', (req, res, next)=>{
  res.clearCookie('yoyohub_user_sid');
  res.redirect('/');
});

router.post('/',(req,res,next)=>{
  userdb.find('account',req.body,{},(err,user)=>{
    if(user.length==0){res.redirect('/login'); req.session.user=user.id;}
    else{res.json({'login':1}); req.session.user='admin';}
  })  
})

module.exports = router;
