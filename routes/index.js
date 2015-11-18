var express = require('express');
var router = express.Router();
var request = require('request');

var API_BASE = 'https://slack.com/api/channels.list';

/* GET home page. */
router.get('/', function(req, res, next) {
  var token = process.env.SLACK_TOKEN;
  request({
    url: API_BASE + '?token=' + token + '&exclude_archived=1',
    json: true
  }, function (err, apiResponse) {
    if (err) {
      return next(err);
    }
    if (!apiResponse.body.ok) {
      if (apiResponse.body.error == 'invalid_auth' || apiResponse.body.error == 'not_authed') {
        return next(new Error('Invalid auth, make sure SLACK_TOKEN is set in environment'));
      }
      return next(new Error('Error in response: ' + apiResponse.error));
    }
    res.render('index', { data: apiResponse.body.channels });
  });
});

module.exports = router;
