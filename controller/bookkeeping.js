const router = require("express").Router();
const Bookkeeping = require("../models/Bookkeeping");

//create Book Keeping
router.post("/", async (req, res) => {
  try {
    // save() from mongoose
    const newKeep = await Bookkeeping.create({ ...req.body });
    res.status(200).json(newKeep);
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

// get all posts
router.get("/", async (req, res) => {
  try {
    const bookkeep = await Bookkeeping.find();

    res.status(200).json(bookkeep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
