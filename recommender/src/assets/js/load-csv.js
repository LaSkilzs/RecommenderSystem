// const fs = require("fs");
import * as fs from "fs";

function loadCSV(filename, options) {
  let data = fs.readFileSync(filename, { encoding: "utf-8" });
  console.log(data);
}

export default loadCSV;
