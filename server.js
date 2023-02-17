const express = require("express");
const app = express();
const { join } = require("path");

const router = require("./routes");

//setting up the port
const PORT = process.env.PORT || 3001;

//use is a method to configure the middleware used by the routes of the Express HTTP server object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use(router);

// running the server
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
