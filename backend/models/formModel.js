const mongoose = require("mongoose");
const validator = require("validator");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  mobileNumber: {
    type: Number,
    required: true,
    maxLength: [12, "Name cannot exceed 12 digits"],
    minLength: [10, "Name should not be less than 10 digits"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  pinCode: {
    type: Number,
    required: true,
  },
  avgBill: {
    type: Number,
    required: true,
    maxLength: [6, "Name cannot exceed 6 digits"],
    minLength: [3, "Name should not be less than 3 digits"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Form", formSchema);
