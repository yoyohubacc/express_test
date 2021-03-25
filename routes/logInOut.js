var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
  res.send({'login':2222})
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
  res.send({'login_check':2})
})

module.exports = router;
