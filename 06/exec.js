const exec = require("child_process");

let process = exec("dir");

process.stdout.on("data", (data) => console.log(data.toString()));
process.stderr.on("data", (data) => console.error(data.toString()));
