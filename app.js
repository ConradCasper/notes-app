const chalk = require('chalk')
const getNotes = require('./notes')


const log = console.log
const command = process.argv[2]

if (command === 'add'){
    log('Adding note!')
} else if (command === 'remove'){
    console.log('Removing Note!')
}





















// const add = require('./utils')

// const sum = add(4, -2)

// console.log(sum)