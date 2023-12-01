const mongoose = require("mongoose");

const bookKeepingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    From: {
      type: Date,
      required: true,
    },
    To: {
      type: Date,
      required: true,
    },
    DailyAmount: {
      type: Number,
      required: true,
    },
    TotalDays: {
      type: Number,
      required: true,
    },
    TotalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookKeeping", bookKeepingSchema);
