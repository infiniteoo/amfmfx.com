const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "server/public/sounds/");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`);
  },
});
let upload = multer({ dest: "server/public/sounds/", storage: storage });

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
    .sort({ dateEntered: -1 })
    .then((sounds) => res.json(sounds));
});

// @ route GE api/sound:id
// @ desc  Get sound by id
// @ access Private

router.get("/sound/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sounds/", req.params.filename));
});

router.post("/sounds/upload/", (req, res) => {
  console.log(req);
  // write req.body to Sounds database
  const newSound = new Sounds({
    soundType: req.body.subcategory,
    name: req.body.name,
    filename: req.body.filename,
    description: req.body.description,
    category: req.body.category,
    key: req.body.soundKey,
    dateEntered: Date.now(),
    length: req.body.length,
    bpm: req.body.bpm,
  });

  newSound.save().then((sound) => res.json(sound));
});

router.post("/sounds/uploadFile", upload.single("file"), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error("no file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

module.exports = router;
