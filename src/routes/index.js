const express = require("express");
const healthRoutes = require("./healthRoutes");
const productRoutes = require("./productRoutes");
const todoRoutes = require("./todoRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/products", productRoutes);
router.use("/todos", todoRoutes);
router.use("/users", userRoutes);

module.exports = router;
