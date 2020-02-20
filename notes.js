const fs = require('fs')
const chalk = require('chalk')
const log = console.log


const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))
    } else {
        log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    const oldNotes = loadNotes()


    const newNotes = oldNotes.filter( note => note.title !== title )

    if(oldNotes.length === newNotes.length){
        log(chalk.red("No note found!"))
    } else {
        saveNotes(newNotes)
        log(chalk.green('Removed note!'))
    }
    


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }



    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}





module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}