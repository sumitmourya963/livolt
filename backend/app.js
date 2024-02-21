const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const compression = require("compression");
const errorMiddleware = require("./middleware/error");
const { oAuth2Client } = require("google-auth-library");
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

app.use(helmet({ crossOriginOpenerPolicy: { policy: "same-origin" } }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["self"],
      scriptSrc: [
        "self",
        "https://www.googletagmanager.com/",
        "https://apis.google.com/js/platform.js",
        "https://js.stripe.com/v3",
      ],
      imgSrc: ["self", "https://res.cloudinary.com/"],
    },
  })
);

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

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID_OAUTH,
      clientSecret: process.env.GOOGLE_SECERET_ID_OAUTH,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // Custom logic to handle user data after authentication
      // You can save user data in your database here
      return done(null, profile);
    }
  )
);

// Serialize user data into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user data from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Passport routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the home page or any desired route
    res.redirect("/");
  }
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
