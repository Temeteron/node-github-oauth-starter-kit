var express = require('express');
var router = express.Router();

var passportLinkedIn = require('../auth/linkedin');
var passportGithub = require('../auth/github');
var passportTwitter = require('../auth/twitter');

var redirectUrl = "";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.send('An error occurred! Please try again!');
});

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    goToMyWebApp(req.user.accessToken, res);
});


////////////////////////////// WHOLE LINK //////////////////////////////////////
router.get('/*', function (req, res) {
  // Get the redirection link as a given route
  // Example: (my web app is: https://www.gitcv.com
  // We need to get the accessToken to make authenticated requestes
  // Therefore we must provide the right url to get the accessToken
  // The request is something like that (or whatever you want):
  // http://www.my_nodejs_server.com/https://www.gitcv.com/#/
  redirectUrl = unescape(req.originalUrl);
  redirectUrl = redirectUrl.substr(1);
  console.log("Redirect URL: " + redirectUrl);
  // The redirectUrl after the unescape and the substr is: https://www.gitcv.com/#/
  // The unescape function is being used to redirect to the right link, 
  // because your web app url could possibly have escape characters.
  // In our example there is one escaper character, which is the '#'.
  // Thus, if your url contains escape chars, then you should call the function escape(my_url)
  // and then redirect to: 'http://www.my_nodejs_server.com/ + my_url'
  
  // After the previous the OAuth will happen and the accessToken will be returned to the given url
  // In our example, function goToMyWebApp() will redirect you to: 'https://www.gitcv.com/#/{accessToken}'
  // where accessToken is the token that generated via the OAuth from GitHub.

  res.redirect('/auth/github');
});

function goToMyWebApp(token, res) {
  var redirectTo = redirectUrl + token;
  console.log("Redirect link: " + redirectTo);
  res.redirect(redirectTo);
}




//////////////////////////// LINKEDIN + TWITTER /////////////////////////////
router.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin', { scope: [ 'user:email' ] }));

router.get('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    goToMyWebApp(req.user.accessToken, res);
});

router.get('/auth/twitter', passportTwitter.authenticate('twitter', { scope: [ 'user:email' ] }));

router.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    goToMyWebApp(req.user.accessToken, res);
});

module.exports = router;
