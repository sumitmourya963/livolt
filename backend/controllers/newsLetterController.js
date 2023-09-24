const NewsLetter = require("../models/newsLetterModel.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newsLetterEmail = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const newsEmail = await new NewsLetter({
    email,
  }).save();
  res.status(201).json({
    success: true,
    newsEmail,
  });
});
