const router = require("express").Router();

//renders the notes page
router.get("/notes", (req, res) => {
  res.sendFile("./notes.html");
});

// this gets the route for the index.hmtl
router.get("/", (req, res) => {
  res.sendFile("./index.html");
});

module.exports = router;
