const express = require("express");
const router = express.Router();
const path = require("path");

// SOUNDS MODEL
const Sounds = require("../database/models/Sounds");

// @route   GET api/sounds
// @desc    Get all sounds
// @access  Public
router.get("/sounds", (req, res) => {
  Sounds.find()
    .sort({ date: -1 })
    .then((sounds) => res.json(sounds));
});

// @ROUTE get api/sounds:parameter
// @desc return various items from the sounds database depending on parameter
// @access Public
router.get("/sounds/:parameter", (req, res) => {
  console.log(req.params.parameter);
  Sounds.find({ soundType: req.params.parameter })
    .sort({ date: -1 })
    .then((sounds) => res.json(sounds));
});

// @ route GE api/sound:id
// @ desc  Get sound by id
// @ access Private

router.get("/sound/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sounds/", req.params.filename));
});

module.exports = router;

router.post("/sounds/upload/", (req, res) => {
  console.log(req.body);
});
