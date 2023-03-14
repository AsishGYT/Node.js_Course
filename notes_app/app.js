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
const yargs = require('yargs')
const chalk = require("chalk")
const { demandOption } = require('yargs')

//customise yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add new notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('title ' + argv.title)
        console.log("body " + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove notes',
    handler: function(){
        console.log('removing notes')
    }
})

yargs.command({
    command: 'list',
    describe: 'list new notes',
    
    handler: function(){
        console.log('listing notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function(){
        console.log('reading notes')
    }
})


// console.log(chalk.blue.bold('Its not about making money. its about sending a message'))
// console.log(chalk.greenBright('Dark Kinght : where is she. where is she. WHERE, IS, SHE'))

//const command = process.argv[2]

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()

// if(command === 'add'){
//     console.log("adding notes")
// } else if (command === 'remove'){
//     console.log('removing notes')
// }

// console.log(validator.isEmail('asishsairam.illa@gytworkz.com'))

// console.log(validator.isURL('https://instagram.com'))

// 1. notes js file, get notes function returning a string
// 2. export getnotes and from app js call the fn

// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)  


