//デフォルト
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // viewとその中で使用できるローカル変数を指定
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;

// // 固定のJSONオブジェクトを返す
// var express = require("express");
// var router = express.Router();

// router.get("/", function(req, res, next) {
//   res.json({
//     recipes: [
//       { title: "nikujaga", content: "niku + jaga" },
//       { title: "curry", content: "veggie + curry cube" }
//     ]
//   });
// });

// module.exports = router;

// var db = require("mongoose");
// var Recipe = db.model("Recipe");

// // Recipeオブジェクトの作成
// new Recipe({
//   title: "jaga bata",
//   content: "potato + butter"
// }).save(function (err, recipe) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("yay");
//     console.log(recipe);
//   }
// });

// // レシピ検索
// Recipe.find()
//   .exec()
//   .then(function (recipes) {
//     console.log("wow");
//     console.log(recipes);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// // 動的API

// // Expressのインポート
// var express = require("express");
// var router = express.Router();

// // Getリクエスト時のアクション
// router.get("/", function (req, res, next) {
//   Recipe.find()
//     .exec()
//     .then(function (recipes) {
//       res.json({
//         recipes: recipes
//       });
//     })
//     .catch(function (err) {
//       res.status(500).json({
//         err: err
//       });
//     });
// });

// module.exports = router;