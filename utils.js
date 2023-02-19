const fs = require("fs");
const path = require("path");
// read all data from file
const getDataFromFile = () => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "./db/db.json"),
    "utf-8"
  );

  const data = JSON.parse(jsonData);

  return data;
};
// write to it
const writeDataToFile = (data) => {
  fs.writeFileSync(path.join(__dirname, "./db/db.json"), data);
};

module.exports = {
  getDataFromFile,
  writeDataToFile,
};
