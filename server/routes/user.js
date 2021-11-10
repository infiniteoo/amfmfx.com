const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/", (req, res) => {
  console.log("user signup");

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
        accessLevel: 1,
        downloadsRemaining: 5,
        lastLogin: Date.now(),
        // today's date plus five days
        fiveDayReset: Date.now() + 1000 * 60 * 60 * 24 * 5,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post("/deduct-dl", function (req, res) {
  console.log("deduct-dl route hit");
  console.log("deduct-dl req.body: ", req.body);
  User.findOneAndUpdate(
    { _id: req.body.userId },
    { $inc: { downloadsRemaining: -1 } },
    { new: true },
    function (err, user) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    }
  );
  /* res.send("deduct-dl response"); */
});

router.post(
  "/login",
  function (req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    // update lastLogin date in database
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { lastLogin: Date.now() } },
      { new: true },
      function (err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log("logged in ooga", req.user);
          var userInfo = {
            username: user.username,
            password: user.password,
            accessLevel: user.accessLevel,
            downloadsRemaining: user.downloadsRemaining,

            userId: user._id,
          };
          res.send(userInfo);
        }
      }
    );
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
