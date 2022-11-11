const mongoose = require("mongoose");

const dateSchema = mongoose.Schema(
  {
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Date", dateSchema);
