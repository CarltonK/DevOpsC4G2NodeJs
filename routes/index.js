var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO: Write logic
  res.render('index', { title: 'Home', foo: 'bar' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express', foo: 'bar' });
});

module.exports = router;
