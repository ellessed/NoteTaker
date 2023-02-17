const router = require("express").Router();
import { join } from "path";

//renders the notes page
router.get("/notes", (_req, res) => {
  res.sendFile(join(__dirname, "../public/notes.html"));
});

// this gets the route for the index.hmtl
router.get("/", (_req, res) => {
  res.sendFile(join(__dirname, "/public/index.html"));
});

export default router;
