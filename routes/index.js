var express = require('express');
var router = express.Router();
var hipstafy = require('../src/hipstafy.js')
var results; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  results = hipstafy(req.body.word);
  console.log(results);
  res.redirect('show')
})

router.get('/show', function (req, res, next){
  res.render('show', {userResults: results})

})
module.exports = router;

// router.post('/', function(req, res) {
//   var word = req.body.word.split(" ")
//   for (var i = 0; i < word.length; i++) {
//     var rand = Math.round(Math.random() * 10)
//     word[i] += " " + hip[rand]
//   }
//   var joined = word.join(" ");
//   console.log(joined);
//   res.send(joined);
// })
