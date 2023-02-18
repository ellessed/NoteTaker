const router = require("express").Router();
const path = require("path");

//renders the notes page
router.get("/notes", (req, res) => {
  console.log("sending note page");
  //res.sendFile("./notes.html");
  const filePath = path.join(__dirname, "../public/notes.html");
  res.sendFile(filePath);
});

// this gets the route for the index.hmtl
router.get("/", (req, res) => {
  res.sendFile("./index.html");
});

module.exports = router;
