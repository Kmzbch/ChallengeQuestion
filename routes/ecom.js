// 

var db = require("mongoose");
var Shop = db.model("Shop");
var Product = db.model("Product");
var Order = db.model("Order");
var Lineitem = db.model("Lineitem");

// create document
var onlineShop = new Shop({
    name: "Online Shop",
    shop_id: 1,
    contact: {
        email: "aaa@example.com",
        phone: 1234567890
    }
});
// save document
onlineShop.save(function (err) {
    if (err) throw err;
});

// create document
var milk = new Product({
    name: "Milk",
    shop_id: 1,
    product_id: "A01",
    price: 4,
    description: "a carton of milk"
});
// save document
milk.save(function (err) {
    if (err) throw err;
});

// create document
var first_order = new Order({
    order_number: 1,
    shop_id: 1,
    total_amount_due: 16,
    order_date: new Date(),
});
// save document
first_order.save(function (err) {
    if (err) throw err;
});

// create document
var order_item = new Lineitem({
    lineitem_id: 1,
    order_number: 1,
    product_id: 1,
    lineitem_price: 4,
    lineitem_qty: 4,
});
// save document
order_item.save(function (err) {
    if (err) throw err;
});



// import Express
var express = require("express");
var router = express.Router();

// Action for GET method
router.get("/", function (req, res, next) {



    Product.find()
        .exec()
        .then(function (products) {
            res.json({
                products: products,
            });
        })
        .catch(function (err) {
            res.status(500).json({
                err: err
            });
        });
    // Shop.find()
    //     .exec()
    //     .then(function (shops) {
    //         res.json({
    //             shops: shops,
    //         });
    //     })
    //     .catch(function (err) {
    //         res.status(500).json({
    //             err: err
    //         });
    //     });

});

module.exports = router;