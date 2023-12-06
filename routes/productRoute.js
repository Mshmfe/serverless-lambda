const express = require("express");

const {
  getAllProducts,
  getSingleProducts,
  createSingleProducts,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProducts);
router.post("/", createSingleProducts);

module.exports = router;
