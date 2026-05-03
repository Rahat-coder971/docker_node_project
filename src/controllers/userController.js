const userService = require("../services/userService");

function getUsers(req, res) {
  const users = userService.getUsers({
    role: req.query.role,
    active: req.query.active
  });

  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
}

function getUserById(req, res) {
  const user = userService.getUserById(Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found."
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
}

module.exports = {
  getUsers,
  getUserById
};
