var express = require('express');
var router = express.Router();
var passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate('google', {
  scope: ['email', 'profile']
}))
router.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: '/users',
  failureRedirect: '/'
}));


module.exports = router;
