const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  subject: {
    type: String,
    required: [true, "Please Enter Subject"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ContactForm", formSchema);
