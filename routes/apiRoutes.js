const { readFileSync } = require("fs");
const { getDataFromFile, writeDataToFile } = require("../utils");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

//read the notes
router.get("/notes", (req, res) => {
  // get notes from the database(db.json)
  // const data = readFileSync("./db/db.json", "utf-8");
  const data = getDataFromFile();
  console.log(data);
  return res.json(data);
});

router.post("/notes", (req, res) => {
  console.log("saving note");
  console.log(req.body);
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  const notes = getDataFromFile();
  notes.push(newNote);

  writeDataToFile(JSON.stringify(notes));
  return res.json(newNote);
});
// readFileSync
// writeFileSync

// import uuid
// use uuidv4 to create a random id for every note in your db.json
// that id is how you target a specific note
module.exports = router;
