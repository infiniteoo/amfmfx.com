const express = require("express");
const router = express.Router();

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

module.exports = router;
