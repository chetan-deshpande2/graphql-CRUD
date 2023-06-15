const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
  category: String,
  productName: String,
  price: Number,
  color: Object,
  imgPath: String,
});

module.exports = mongoose.model('productList', productListSchema);
