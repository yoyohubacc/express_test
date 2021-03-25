var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
  res.json({'home index':1123})
});

module.exports = router;
