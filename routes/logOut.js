var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
  res.clearCookie('yoyohub_user_sid');
  res.json({'logout':2222})
});
router.post('/',(req,res,next)=>{
  res.json({'logout_check':2})
})

module.exports = router;
