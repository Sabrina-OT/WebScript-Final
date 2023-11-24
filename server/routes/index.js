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

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Us'});
});

module.exports = router;