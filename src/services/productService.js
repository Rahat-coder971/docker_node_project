const products = require("../data/products");

function getProducts(filters = {}) {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.inStock !== undefined) {
      const expectedStockValue = filters.inStock === "true";

      if (product.inStock !== expectedStockValue) {
        return false;
      }
    }

    return true;
  });
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

module.exports = {
  getProducts,
  getProductById
};
