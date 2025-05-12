const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.register(req.body);
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const loggedInUser = await User.login(req.body);
    res.send(loggedInUser);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
});

module.exports = router;
