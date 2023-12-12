const Products = require("../models/productModels");

const getAllProducts = async (req, res) => {
  try {
    const product = await Products.find();
    res.send({
      products: product,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send({
      product: product,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const createSingleProducts = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.send({
      message: "Product created successfully",
      products: product,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
module.exports = { getAllProducts, getSingleProducts, createSingleProducts };
