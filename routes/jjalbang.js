var express = require('express');
var tumblr = require('tumblr.js');
var router = express.Router();

var client = tumblr.createClient({
  consumer_key: 'dZF1SreLuHRk1lw38Pf2jMJiUGhdAME8bZxjr8etVaGVg2EzD8',
  consumer_secret: 'taJYQwwOaphzE0B585cXTzj9zMIECpYBhQs3TVTTZG3YGnapao',
  token: '8pqaQMmlSeIAfWDfQSYumqt8ZQJIqMlkFByCI60iRp5XPhawP3',
  token_secret: 'keX1tcvbdOLHhltl1HMBaMhN4sovxj2EycERSvJF0OFFOZnhTZ'
});



/* GET users listing. */
router.get('/', function(req, res, next) {

    client.userInfo(function (err, data) {
    // data.blogs.forEach(function (blog) {
    //     console.log(blog.name);
        res.send(data);
    });

    return false;
});

  // res.send({
  //   name: 'hi',
  //   msg: 'cool'
  // });


module.exports = router;
