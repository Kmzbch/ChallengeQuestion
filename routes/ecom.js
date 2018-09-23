var db = require("mongoose");
var Shop = db.model("Shop");

// Shopオブジェクトの作成
new Shop({
    _id: 1,
    name: "yahoo",
    email: "aaa@example.com",
    phone: 1234567890,
}).save(function (err, shop) {
    if (err) {
        console.log(err);
    } else {
        console.log("yay");
        console.log(shop);
    }
});

// ショップ検索
Shop.find()
    .exec()
    .then(function (shops) {
        console.log("wow");
        console.log(shops);
    })
    .catch(function (err) {
        console.log(err);
    });

// 動的API

// Expressのインポート
var express = require("express");
var router = express.Router();

// Getリクエスト時のアクション
router.get("/", function (req, res, next) {
    Shop.find()
        .exec()
        .then(function (shops) {
            res.json({
                shops: shops
            });
        })
        .catch(function (err) {
            res.status(500).json({
                err: err
            });
        });
});

module.exports = router;