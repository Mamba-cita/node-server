const getAllUsers = (req, res) => {
  res.send("get all users");
};

const createUser = (req, res) => {
  res.json(req.body);
};

const getSigleUser = (req, res) => {
  res.json({id: req.params});
};

const updateUser = (req, res) => {
  res.send("Update user details");
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

module.exports = {
  getAllUsers,
  createUser,
  getSigleUser,
  updateUser,
  deleteUser,
};
