const fs = require("fs");

const buf = fs.readFileSync(process.argv[2]);
const string = buf.toString();

const count = string.split("\n").length - 1;

console.log(count);
