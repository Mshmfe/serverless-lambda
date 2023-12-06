const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: Number,
});

const Products = model("products", productSchema);

module.exports = Products;
