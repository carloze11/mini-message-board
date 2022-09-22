var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Cindy", 
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Eevee",
    added: new Date()
  }
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
