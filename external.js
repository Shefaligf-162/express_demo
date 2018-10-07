/*console.log('External Opened');
module.exports.age=25;
module.exports.addnote= ()=>{
	return 'Shefali';
};

const fs1=require('fs');
module.exports.addnote= ()=>{
	fs1.appendFile('practice.txt','second method ',(err)=>{
		if(err) throw err;
	});
module.exports.add= (a,b)=>{
	return a+b;
};
module.exports.sub=(a,b)=>{
	return a-b;
}

module.exports.listAll= () =>{
	return 'Getting all nodes';
}
module.exports.title=(title)=>{
console.log(title);
}
*/
console.log('Starting external.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('note.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('note.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes;
};
var log=(note)=>{
	console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
var getNote = (title) => {
  var fetch=fetchNotes();
  var dupl=fetch.filter((note)=> note.title===title);
  if(dupl.length!=0){
  	return true;
  }
  else {return false;}
};

var removeNote = (title) => {
  var notes=fetchNotes();
  var dupl=notes.filter((note)=> note.title !== title);
  saveNotes(dupl);
  return notes.length!==dupl.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  log
};
