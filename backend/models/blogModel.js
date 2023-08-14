const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },

  title: {
    type: String,
    required: [true, "Please Enter Title"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Description"],
  },
  blogData: {
    type: String,
    required: [true, "Please Enter Blog Content"],
  },
  date: {
    type: String,
    required: [true, "Please Enter Date"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  readTime: {
    type: String,
    required: [true, "Please enter Read Time."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
