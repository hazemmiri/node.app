// console.log("this is app.js file");

// import file system
const fs = require("fs");
//import notes.js
const notes = require("./notes");
// console.log(notes.add(5,6))
// import yargs
const yargs = require("yargs");
// console.log("Process ARVG : " , process.argv[4]);
// console.log("Yargs ARVG : " , yargs.argv);
const id = yargs.argv.id;
const title = yargs.argv.title;
const body = yargs.argv.body;
// console.log(body)

const command = yargs.argv._[0];
// console.log(command)
if (command === "add") {
  console.log("adding note");
  notes.addingNote(id, title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(id);
} else if (command == "read") {
  console.log("reding note");
  notes.readNotes(id);
} else if (command === "list") {
  console.log("notes list");
  notes.getNotes();
} else {
  console.log("Unknown command");
}
