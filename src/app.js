const express = require("express");
const apiRoutes = require("./routes");
const { notFoundHandler } = require("./middleware/notFoundHandler");
const { errorHandler } = require("./middleware/errorHandler");
const { requestLogger } = require("./middleware/requestLogger");

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Express API project is running.",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      todos: "/api/todos",
      health: "/api/health"
    }
  });
});

app.use("/api", apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
