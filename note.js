const fs = require ('fs');
const chalk = require ('chalk');

const getNotes =() => {
    return 'Your notes...'
}

const addNote = (title,body) => {
    const notes = loadNote()
    const duplicateNotes = notes.filter( (note) => note.title === title )

    // const duplicateNotes = notes.filter((note) =>{
    //     return note.title === title
    // })

    if (duplicateNotes.length ===0) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.yellow.inverse('New Note Added!'))
    } else {
        console.log(chalk.green.inverse('Note title taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNote()
    const notesToKeep = notes.filter((note) => note.title !== title )
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })


    if (notes.length > notesToKeep.length){
        saveNote(notesToKeep)
        console.log(chalk.yellow.inverse('Note removed!'))
    } else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
    // console.log(title);
}

const listNote = () => {
    const notes = loadNote()

    console.log(chalk.inverse('Your Notes!'))

    notes.forEach((note) => {
        console.log(note.title)
        
    });
}

const readNote = (title) => {
    const notes = loadNote()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.inverse(note.title));
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return[]
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}