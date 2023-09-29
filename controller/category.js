const router = require("express").Router();
const Category = require("../models/Categories");

//get all categories
router.get("/getCat", async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({ category, message: "Category Found Successfully!" });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
