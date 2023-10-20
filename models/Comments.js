const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    userAvatar: {
      type: String,
      require: true,
    },

    comment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
