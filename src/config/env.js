const PORT = process.env.PORT || 5000;
const TODO_API_URL = process.env.TODO_API_URL || "https://jsonplaceholder.typicode.com/todos?_limit=5";

module.exports = {
  PORT,
  TODO_API_URL
};
