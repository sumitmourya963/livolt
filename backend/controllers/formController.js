const Form = require("../models/formModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.consultationFromController = catchAsyncErrors(
  async (req, res, next) => {
    const { name, email, mobileNumber, pinCode, avgBill } = req.body;
    const form = await new Form({
      name,
      mobileNumber,
      email,
      pinCode,
      avgBill,
    }).save();
    res.status(201).json({
      success: true,
      form,
    });
  }
);
