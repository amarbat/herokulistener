var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST search users listing. */
router.post('/', function(req, res, next) {
  console.log ("========== Starting Request Write ==========");
  process.stdout.write (JSON.stringify(req.headers) + '\n');
  process.stdout.write (JSON.stringify(req.body) + '\n');
  console.log ("========== Ending Request Write ==========");

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"foundSignupDate":"2022-08-17", "userId":"123456789"}));
});

/* POST search users listing array. */
router.post('/search', function(req, res, next) {
  console.log ("========== Starting Request Write ==========");
  process.stdout.write (JSON.stringify(req.headers) + '\n');
  process.stdout.write (JSON.stringify(req.body) + '\n');
  console.log ("========== Ending Request Write ==========");

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"foundSignupDate":"2022-08-17", "userId":"123456789" , "user":[{"name":"jack"},{"name":"john"},{"name":"joe"}]}));
});

module.exports = router;
