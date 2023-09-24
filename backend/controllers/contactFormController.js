const ContactForm = require("../models/contactFormModel.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.contactFromController = catchAsyncErrors(async (req, res, next) => {
  const { name, email, message, subject } = req.body;
  const contactForm = await new ContactForm({
    name,
    email,
    subject,
    message,
  }).save();
  res.status(201).json({
    success: true,
    contactForm,
  });
});
