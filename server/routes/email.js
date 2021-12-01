const express = require("express");
const router = express.Router();

const emailController = require("../email/email.controller");
const { PORT, CLIENT_ORIGIN } = require("../config");
const DB_URL = process.env.MONGODB_CONNECT_STRING;

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
router.post("/email", emailController.collectEmail);

// Same as above, but this is the endpoint pinged in the componentDidMount of
// Confirm.js on the client.
router.get("/confirm/:id", emailController.confirmEmail);

module.exports = router;
