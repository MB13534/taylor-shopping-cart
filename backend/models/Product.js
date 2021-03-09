const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nwt: {
    type: Boolean,
    required: true,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
  },
  color: {
    type: String,
  },
  subColor: {
    type: String,
  },
  countInStock: {
    tpe: Number,
    required: true,
  },
  imageUrl1: {
    type: String,
    required: true,
  },
  imageUrl2: {
    type: String,
  },
  imageUrl3: {
    type: String,
  },
  imageUrl4: {
    type: String,
  },
  imageUrl5: {
    type: String,
  },
  imageUrl6: {
    type: String,
  },
  imageUrl7: {
    type: String,
  },
  imageUrl8: {
    type: String,
  },
});

//create the model, first variable 'collection name' is SINGULAR, Mongoose will make plural
//second variable is the schema
const Product = mongoose.model("product", productSchema);

//export product model
module.exports = Product;
