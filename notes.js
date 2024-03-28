// console.log("this is notes.js file")
const fs = require("fs");

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    return [];
  }
};

const addingNote = (pid, pTitle, pBody) => {
  let notes = fetchNotes();
  var note = {
    id: pid,
    title: pTitle,
    body: pBody,
  };
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(note));
};

const readNote = (pId) => {
  // read all the notes inside the file notes.txt
  var notes = fetchNotes();
  // filter notes
  var filterNotes = notes.filter((note) => note.id === pId);
  console.log(filterNotes);

  const logNotes = () => {
    const notes = fetchNotes();
    notes.forEach((note) => logNotes(note));
  };
};

module.exports = { addingNote, removeNote, readNote, logNotes };
