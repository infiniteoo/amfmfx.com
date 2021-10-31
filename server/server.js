// INITIALIZE DOTENV
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 7777;

// Route requires
const user = require("./routes/user");

// MIDDLEWARE
app.use(morgan("dev"));

// BODY PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Sessions
app.use(
  session({
    secret: "bruce-is-a-cat",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
