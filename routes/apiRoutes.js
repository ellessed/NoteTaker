const { readFileSync } = require("fs");

const router = require("express").Router();

//read the notes
router.get("/notes", (req, res) => {
  // get notes from the database(db.json)
  const data = readFileSync("./db/db.json", "utf-8");

  res.json(data);
});

// you can write and read files in here without using a class

// readFileSync
// writeFileSync

// import uuid
// use uuidv4 to create a random id for every note in your db.json
// that id is how you target a specific note
module.exports = router;
