// Node.jsからMongoDBを使う(app.jsでrequire)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shop = new Schema({
  _id: Number,
  name: String,
  email: String,
  phone: Number,
});

// var Product = new Schema({
//   catalog_number: String,
//   shop: Shop,
//   name: String,
//   price: Number,
//   description: String,
// });

mongoose.model('Shop', Shop);
mongoose.connect('mongodb://localhost:27017/ecom');