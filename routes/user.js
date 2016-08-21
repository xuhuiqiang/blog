var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/reg');
});
router.get('/reg', function(req, res, next) {
  res.render('user/reg');
});
router.get('/login', function(req, res, next) {
  res.render('user/login');
});
router.get('/logout', function(req, res, next) {
  res.render('退出');
});




module.exports = router;
