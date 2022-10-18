const express = require("express");

const router = express.Router();
const {
  getAllUsers,
  createUser,
  getSigleUser,
  updateUser,
  deleteUser,
} = require("../controllers/work");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getSigleUser).delete(deleteUser).patch(updateUser);

module.exports = router;
