const router = require("express").Router();
const Bookkeeping = require("../models/Bookkeeping");

//create Book Keeping
router.post("/", async (req, res) => {
  try {
    const newKeep = await Bookkeeping.create({ ...req.body });
    res.status(200).json(newKeep);

    // save() from mongoose
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete post
router.delete("/:bookkeepId", async (req, res) => {
  try {
    await Bookkeeping.findByIdAndDelete({ _id: req.params.bookkeepId });
    res.json("Delete keeping Successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Put post
router.put("/:bookkeepId", async (req, res) => {
  try {
    await Bookkeeping.findByIdAndUpdate(
      { _id: req.params.bookkeepId },
      req.body,
      { new: true }
    );
    res.json("update keeping Successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get posts if the post user is current login user
router.get("/:userId", async (req, res) => {
  try {
    const bookkeep = await Bookkeeping.find({ userId: req.params.userId });

    res.status(200).json(bookkeep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
