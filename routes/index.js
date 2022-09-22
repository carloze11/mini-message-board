var express = require('express');
var router = express.Router();
const events = require('events');


const eventEmitter = new events.EventEmitter();

eventEmitter.on('click', function () {
  res.redirect('/new')
})

eventEmitter.emit('clicked')

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
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()})
  res.redirect('/')
})



module.exports = router;
