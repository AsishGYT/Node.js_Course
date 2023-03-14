// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js. \n This is a message to Gotham. \n You either die a hero or live long enough to see yourself become the villian.\n Because I...AM...BATMAN')
// Write file and write file sync//
// append a message to file
// fs.appendFileSync('notes.txt', '\n Appended text \n I am not the hero this city deserves, but I am the hero this city needs.')




// const imported_name = require('./utils.js')
// const name = "BRUCE WAYNE"
//console.log(imported_name)

// const power = require('./utils.js')
// const power_fn = power(3,2)
// console.log(power_fn)


const validator = require('validator')

const chalk = require("chalk")

console.log(chalk.blue.bold('Its not about making money. its about sending a message'))
console.log(chalk.greenBright('Dark Kinght : where is she. where is she. WHERE, IS, SHE'))


console.log(validator.isEmail('asishsairam.illa@gytworkz.com'))

console.log(validator.isURL('https://instagram.com'))

// 1. notes js file, get notes function returning a string
// 2. export getnotes and from app js call the fn

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)  
