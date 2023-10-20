const router = require("express").Router();
const Comment = require("../models/Comments");

//get all comments
router.get("/:postId", async (req, res) => {
  try {
    const comment = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comment);
  } catch (error) {
    return res.json(error);
  }
});

//post comments
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      postId: req.body.postId,
      username: req.body.username,
      userAvatar: req.body.userAvatar,
      comment: req.body.comment,
    });

    res.status(200).json(comment);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
