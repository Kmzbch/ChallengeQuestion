// Node.jsからMongoDBを使う(app.jsでrequire)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Recipe = new Schema({
//   title: String,
//   content: String,
//   created_at: {
//     type: Date,
//     default: Date.now
//   },
//   last_modified_at: {
//     type: Date,
//     default: Date.now
//   }
// });

var Shop = new Schema({
  //  _id: Schema.Types.ObjectId,
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



// mongoose.model('Recipe', Recipe);
// mongoose.connect('mongodb://localhost:27017/recipes');

mongoose.model('Shop', Shop);
mongoose.connect('mongodb://localhost:27017/ecom');