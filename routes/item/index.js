var express = require('express');
var mongo = require('../modules/mongodb')

var router = express.Router();

/* item page. */
router.get('/', function(req, res, next) {
  res.clearCookie('user_sid');
 
  res.json({'res':100})
});

router.post('/',(req,res,next)=>{
  // console.log(req.body.fetch)
  res.json({'res':101})
})
router.put('/',(req,res,next)=>{
  res.json({'res':102})
})

// router.delete

module.exports = router;
