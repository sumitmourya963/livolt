const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const compression = require("compression");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(
  require("prerender-node").set("prerenderToken", "thlxB1l4gawnP6yRu8Ku")
);
// setting up cross origin request
app.use(cors());

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(compression());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 100000,
  })
);

// setting up express session
app.use(
  session({
    secret: "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",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(
  bodyParser.json({
    limit: "50mb",
    parameterLimit: 100000,
  })
);
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const form = require("./routes/formRoute");
const contactForm = require("./routes/contactFormRoute");
const newsletter = require("./routes/newsLetterRoute");
const blog = require("./routes/blogRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", form);
app.use("/api/v1", contactForm);
app.use("/api/v1", newsletter);
app.use("/api/v1/", blog);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
