const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

const { getDataFromFile, writeDataToFile } = require("../utils");

//read the notes
router.get("/notes", (req, res) => {
  const data = getDataFromFile();
  return res.json(data);
});

router.post("/notes", (req, res) => {
  try {
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    let notes = getDataFromFile();
    notes.push(newNote);

    writeDataToFile(JSON.stringify(notes));
    return res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Your request has failed!" });
  }
});

router.delete("/notes/:id", (req, res) => {
  try {
    const id = req.params.id;
    const notes = getDataFromFile();

    let filteredNotes = notes.filter((note) => {
      return note.id != id;
    });

    writeDataToFile(JSON.stringify(filteredNotes));

    return res.status(200).json({ message: "success!" });
  } catch (error) {
    res.status(500).json({ error: "Your request has failed!" });
  }
});

module.exports = router;
