const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const comment = require("../model/commentmodel");

// @desc Get comment
// @route GET /api/comment
// @access private
const getcomment = asyncHandler(async (req, res) => {
  const comment = await comment.find();
  res.status(200).json(comment);
});

// @desc set comment
// @route post /api/comment
// @access private
const setcomment = asyncHandler(async (req, res) => {
  const newId = uuidv4();
  if (!req.body.text || !req.body.comment) {
    res.status(400);
    throw new Error("please add comments");
  }

  const comment = await comment.create({
    text: req.body.text,
    comment: req.body.comment,
    newId: newId,
  });
  res.status(200).json(comment);
});
// @desc update comment
// @route put /api/comment
// @access private
const updatecomment = asyncHandler(async (req, res) => {
  const comment = await comment.findById(req.params.id);
  if (!comment) {
    res.status(400);
    throw new Error("comment not found");
  }
  const updatecomment = await comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatecomment);
});
// @desc delete comment
// @route delete /api/comment
// @access private
const deletecomment = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete comment ${req.params.id}` });
});
module.exports = {
  getcomment,
  setcomment,
  updatecomment,
  deletecomment,
};
