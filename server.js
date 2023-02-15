//bringing in express and
const express = require("express");
const app = express();
//brining in the routes via modularization
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//setting up the port
const PORT = process.env.PORT || 3001;
//use is a method to configure the middleware used by the routes of the Express HTTP server object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/html", htmlRoutes);

//used to bind and listen the connections on the specified host and port
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
