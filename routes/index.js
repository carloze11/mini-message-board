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
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini MessageBoard', })
}
)

module.exports = router;
