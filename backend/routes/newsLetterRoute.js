const express = require("express");
const { newsLetterEmail } = require("../controllers/newsLetterController.js");
const router = express.Router();

router.route("/newsletter").post(newsLetterEmail);

module.exports = router;
