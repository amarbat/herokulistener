var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let body = JSON.parse(req.body);
  console.log (body);
  res.send ("Success");
});

module.exports = router;
