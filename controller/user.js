const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require("../models/Users");

//get single user
router.get("/:id", async (req, res) => {
  try {
    const userInfo = await Users.findById(req.params.id);

    return res.status(200).json(userInfo);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
