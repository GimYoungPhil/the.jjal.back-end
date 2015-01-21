var express = require('express');
var tumblr = require('tumblr.js');
var router = express.Router();

var client = tumblr.createClient({
  consumer_key: 'dZF1SreLuHRk1lw38Pf2jMJiUGhdAME8bZxjr8etVaGVg2EzD8',
  consumer_secret: 'taJYQwwOaphzE0B585cXTzj9zMIECpYBhQs3TVTTZG3YGnapao',
  token: '8pqaQMmlSeIAfWDfQSYumqt8ZQJIqMlkFByCI60iRp5XPhawP3',
  token_secret: 'keX1tcvbdOLHhltl1HMBaMhN4sovxj2EycERSvJF0OFFOZnhTZ'
});

var blogName = 'n-i-c-e-d-r-e-a-m';

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.userInfo(function (err, data) {
    res.send(data);
  });
  return false;
});

router.get('/info', function(req, res, next) {
  client.blogInfo(blogName, function(err, data) {
    res.send(data);
  });

  return false;
});

router.get('/photo', function(req, res, next) {
  console.log({limit: req.query.limit, offset: req.query.offset});
  client.posts(blogName, {limit: req.query.limit, offset: req.query.offset}, function(err, data) {
    res.send(data);
  });

  return false;
});

module.exports = router;
