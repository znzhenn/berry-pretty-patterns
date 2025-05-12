const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

// Route: POST /users/register
router.post("/register", async (req, res) => {
  try {
    const user = await userModel.register(req.body);
    res.json(user); // ✅ Send back user data as JSON
  } catch (err) {
    res.status(400).json({ message: err.message }); // ✅ Send error message as JSON
  }
});

// Optional: Login route for testing
router.post("/login", async (req, res) => {
  try {
    const user = await userModel.login(req.body);
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
