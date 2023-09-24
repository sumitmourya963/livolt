const mongoose = require("mongoose");
const validator = require("validator");

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
});

module.exports = mongoose.model("NewsLetter", newsLetterSchema);
