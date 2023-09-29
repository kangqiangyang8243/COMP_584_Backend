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
  let posts;
  const catName = req.query.catName;
  try {
    if (catName) {
      posts = await Posts.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Posts.find();
    }
    // save() from mongoose

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all posts
router.get("/:postId", async (req, res) => {
  try {
    // save() from mongoose
    const post = await Posts.findById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
