const router = require("express").Router();
const Users = require("../models/Users");

//get all user
router.get("/", async (req, res) => {
  try {
    const userInfo = await Users.find();

    return res.status(200).json(userInfo);
  } catch (error) {
    return res.json(error);
  }
});

//get single user
router.get("/:id", async (req, res) => {
  try {
    const userInfo = await Users.findById(req.params.id);

    return res.status(200).json(userInfo);
  } catch (error) {
    return res.json(error);
  }
});

//update user online
router.put("/:id", async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.params.id, { isOnline: false });

    return res.status(200).json();
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
