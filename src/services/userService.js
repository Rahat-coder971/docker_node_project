const users = require("../data/users");

function getUsers(filters = {}) {
  return users.filter((user) => {
    if (filters.role && user.role !== filters.role) {
      return false;
    }

    if (filters.active !== undefined) {
      const expectedActiveValue = filters.active === "true";

      if (user.active !== expectedActiveValue) {
        return false;
      }
    }

    return true;
  });
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  getUsers,
  getUserById
};
