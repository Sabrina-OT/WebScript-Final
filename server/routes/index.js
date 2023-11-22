var express = require('express');
var router = express.Router();

/* GET default page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'JobTracker'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'JobTracker'});
});

module.exports = router;