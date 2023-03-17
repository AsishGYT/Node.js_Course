const { Console } = require('console')
const fs = require('fs')

// const book = {
//     title : 'ego is the enemy',
//     author : 'ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// fs.writeFileSync('1_json.json', bookJSON)

const dataBuffer = fs.readFileSync('1_json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)
console.log(dataBuffer.toString())

data.name = "bruce wayne"
data.age = "30"

const userJSON = JSON.stringify(data)
fs.writeFileSync("1_json.json", userJSON)