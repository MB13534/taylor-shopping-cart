const express = require("express");
const router = express.Router();

const {
  getProductById,
  getAllProducts,
} = require("../controller/productControllers");

//when user navigates to these routes, the functions as declared will fetch data

//GET all of our products from DB
//@route GET /api/products
//@access public
router.get("/taylor-shopping-cart/", getAllProducts);

//GET a product from DB
//@route GET /api/products/:id
//@access public
router.get("/taylor-shopping-cart/:id", getProductById);

module.exports = router;
