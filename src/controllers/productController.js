const productService = require("../services/productService");

function getProducts(req, res) {
  const products = productService.getProducts({
    category: req.query.category,
    inStock: req.query.inStock
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
}

function getProductById(req, res) {
  const product = productService.getProductById(Number(req.params.id));

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found."
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
}

module.exports = {
  getProducts,
  getProductById
};
