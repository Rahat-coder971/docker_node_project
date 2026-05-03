const { TODO_API_URL } = require("../config/env");
const fallbackTodos = require("../data/todos");

async function getTodos() {
  try {
    const response = await fetch(TODO_API_URL);

    if (!response.ok) {
      throw new Error(`Todo API returned ${response.status}`);
    }

    return {
      source: "jsonplaceholder.typicode.com",
      data: await response.json()
    };
  } catch (error) {
    return {
      source: "local fallback",
      message: "External todo API was unavailable, so fallback data was returned.",
      data: fallbackTodos
    };
  }
}

module.exports = {
  getTodos
};
