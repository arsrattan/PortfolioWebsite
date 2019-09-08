let router = require('./index')

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title:'Projects'});
});

module.exports = router;