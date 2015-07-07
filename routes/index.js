var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Richard Marquez' });
});

router.get('/nocomments', function(req, res, next) {
    res.render('nocomments', { title: 'nocomments.css' });
});

router.get('/word', function(req, res, next) {
    res.render('word', { title: 'reading...' });
});

router.get('/deep', function(req, res, next) {
    res.render('deep', { title: 'space.plumbing' });
});

router.get('/wopr', function(req, res, next) {
    res.render('wopr', { title: 'W.O.P.R.' });
});

router.get('/dice', function(req, res, next) {
    res.render('dice', { title: 'rolling...' });
});

module.exports = router;
