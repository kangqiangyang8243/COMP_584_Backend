const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require("../models/Users");

//register
router.post("/register", async (req, res) => {
  try {
    const usernameCheck = await Users.findOne({
      username: req.body.username,
    });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await Users.create({
      ...req.body,
      password: hashedPassword,
    });

    const { password, ...userWithoutPassword } = user._doc;
    return res.status(200).json({ status: true, userWithoutPassword });
  } catch (error) {
    return res.json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const users = await Users.findOne({ username: req.body.username });
    if (!users) return res.json({ msg: "User Not Found!", status: false });
    const isMatch = await bcrypt.compare(req.body.password, users.password);
    if (!isMatch) {
      return res.json({ msg: "Invalid password", status: false });
    }

    const { password, ...userWithoutPassword } = users._doc;

    return res.status(200).send({ status: true, userWithoutPassword });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
