const express = require("express");
const router = express.Router();
const Library = require("../models/PatternLibrary");

router.post("/add", async (req, res) => {
  try {
    await Library.addToLibrary(req.body.patternID);
    res.send({ message: "Pattern added to library." });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const library = await Library.getLibrary();
    res.send(library);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
