const express = require("express");
const {
  contactFromController,
} = require("../controllers/contactFormController.js");
const router = express.Router();

router.route("/contact/form").post(contactFromController);

module.exports = router;
