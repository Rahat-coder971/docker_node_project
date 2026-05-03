const todoService = require("../services/todoService");

async function getTodos(req, res, next) {
  try {
    const todos = await todoService.getTodos();

    res.status(200).json({
      success: true,
      ...todos
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTodos
};
