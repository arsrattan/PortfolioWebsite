let router = require('./index')

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title:'Contact Me'});
});

module.exports = router;