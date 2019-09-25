const chalk = require('chalk')

const notes = require('./note.js')

const yargs =require('yargs')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe: 'Add a note',
    builder: {
       title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
       },
       body:{
           describe: 'Note Body',
           demandOption: true,
           type: 'string'
       }
       
    },
    handler (argv) {
        notes.addNote(argv.title,argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note tiltle',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
        // console.log('Removing a note')
    }
})
yargs.command({
    command: 'list',
    describe: 'List out all notes',
    handler (){
        notes.listNote()
        // console.log('Listing all the Notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
        // console.log('Reading a note')
    }
})
yargs.parse()

// console.log(yargs.argv)

// if (command === 'add'){
//     console.log('Adding note!')
// } else if( command === 'remove'){
//     console.log('Removing note!')
// }

// const msg = getNotes()

// console.log(msg)

// const yellowmsg = chalk.yellow.inverse.underline.bold('Success!')
// console.log(yellowmsg)

// console.log(process.argv[2])

// console.log(validator.isEmail('anoop@exp.com'))




// const add = require('./utils.js')

// const sum = add (5,-2)

// console.log(sum)

// const validator = require('validator')

// const command = process.argv[2];

// console.log(process.argv)
