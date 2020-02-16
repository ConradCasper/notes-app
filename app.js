const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

const log = console.log



// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    handler: function(){
        console.log("Adding a new note!")
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        log('Removing the note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        log("Reading a note")
    }
})

// add, remove, read, list

log(yargs.argv)





















// const add = require('./utils')

// const sum = add(4, -2)

// console.log(sum)