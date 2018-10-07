/*const fs=require('fs');
const os=require('os');
const _ =require('lodash');

const note=require('./external.js');

const x=os.userInfo();
fs.appendFile('practice.txt',`Hello ${x.username} !`,(err)=>{
	if(err) throw err;
	console.log('Appended');
});
*/
/*const notes=require('./apiFormation.js');
const note=require('./external.js');
var result=note.add(8,-2);
console.log(result);

console.log(`my age is ${note.age}`);

var filterArray =_.uniq(['An',1,2,'she','An',1]);
console.log(filterArray);
console.log(_.isString(true));
console.log(_.isString('shefali'));

console.log('Command is :',process.argv[3]);

var command=process.argv[2];
if(command=='add'){
	console.log('add here');
}
else if(command=='list'){
	console.log('list here');
}
else {
	console.log("don't know the command");
}

const yargs= require('yargs');
const argv = yargs.argv;
console.log(argv);
var z=note.sub(argv.a,argv.b);// call sub function from external.js file
console.log('subtraction is :',z);

const note=require('./external.js');
const yargs=require('yargs');
const argv=yargs.argv;
console.log(note.listAll());
console.log(argv);
var t= note.title(argv.title);
*/

console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./external.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.log(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(function(note) { notes.log(note); });
} else if (command === 'read') {
  var bool=notes.getNote(argv.title);
  if(bool){
  	console.log('Get the note');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  }
  else {
  	console.log('Not found');
  }
} else if (command === 'remove') {
  var bool=notes.removeNote(argv.title);
  var msg=bool?console.log('Removing note1', argv.title):console.log('Not removed');
  
} else {
  console.log('Command not recognized');
}
