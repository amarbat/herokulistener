var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log (req.body);
  console.log ("==========================");
  console.log (req.headers);
  res.send ("Success");
});

router.post('/', function(req, res, next) {
  console.log (req.body);
  console.log ("==========================");
  console.log (req.headers);
  res.send ("Success");
});

module.exports = router;
