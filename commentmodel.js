const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
    comment: {
      type: String,
      required: [true, "comment"],
    },
    newId: {
      type: String,
      //required: [true, "id"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);
