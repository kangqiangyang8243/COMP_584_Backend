const router = require("express").Router();
const Posts = require("../models/Post");

//create post
router.post("/", async (req, res) => {
  try {
    // save() from mongoose
    const newPosts = await Posts.create({ ...req.body });
    res.status(200).json(newPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all posts
router.get("/", async (req, res) => {
  try {
    // save() from mongoose
    const newPosts = await Posts.find();
    res.status(200).json(newPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
