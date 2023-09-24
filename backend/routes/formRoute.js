const express = require("express");
const {
  consultationFromController,
} = require("../controllers/formController.js");
const router = express.Router();

router.route("/consultation/form").post(consultationFromController);

module.exports = router;
