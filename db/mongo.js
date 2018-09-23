// MongoDB by using mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Shop table
var Shop = new Schema({
  name: String,
  shop_id: Number,
  contact: {
    email: String,
    phone: Number
  }
});
// Product table
var Product = new Schema({
  name: String,
  product_id: String,
  shop_id: Number,
  price: Number,
  description: String,
});
// Order table
var Order = new Schema({
  order_number: Number,
  shop_id: Number,
  total_amount_due: Number,
  order_date: Date,
});
// Lineitem table
var Lineitem = new Schema({
  lineitem_id: Number,
  order_number: Number,
  product_id: Number,
  lineitem_price: Number,
  lineitem_qty: Number,
});

mongoose.model('Shop', Shop);
mongoose.model('Product', Product);
mongoose.model('Order', Order);
mongoose.model('Lineitem', Lineitem);
mongoose.connect('mongodb://localhost:27017/ecom');