var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  process.stdout.write (JSON.stringify(req.body) + '\n');
  console.log ("==========================");
  process.stdout.write (JSON.stringify(req.headers) + '\n');
  res.send ("Success");
});

router.post('/', function(req, res, next) {
  process.stdout.write (JSON.stringify(req.body) + '\n');
  console.log ("==========================");
  process.stdout.write (JSON.stringify(req.headers) + '\n');
  res.send ("Success");
});

module.exports = router;
