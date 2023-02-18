const fs = require("fs");
const path = require("path");

const getDataFromFile = () => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "./db/db.json"),
    "utf-8"
  );

  const data = JSON.parse(jsonData);

  return data;
};

const writeDataToFile = (data) => {
  fs.writeFileSync(path.join(__dirname, "./db/db.json"), data);
};

module.exports = {
  getDataFromFile,
  writeDataToFile,
};
