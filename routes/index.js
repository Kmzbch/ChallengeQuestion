//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//module.exports = router;
var db = require('mongoose');
var Recipe = db.model('Recipe');

new Recipe({
      title: 'jaga bata',
      content: 'potato + butter'
}).save(function (err, recipe){
  if(err) {
    console.log(err);
  } else {
    console.log('yay');
    console.log(recipe);
  }
});

Recipe.find()
  .exec()
  .then(function(recipes){
    console.log('wow');
    console.log(recipes);
  })
  .catch(function(err) {
    console.log(err);
  });

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  Recipe.find()
    .exec()
    .then(function(recipes){
      res.json({recipes: recipes});
    })
    .catch(function(err) {
      res.status(500).json({err: err});
    });
});

module.exports = router
