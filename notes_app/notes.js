const fs = require('fs')
// const name = "Ram";
// const message = `My name is ${name} \n an age ${30}`;

const msg2 = `MS dhoni finishes off in style. the celebrations have begun in the dressing room`
const getNotes = function(){
    return msg2;
} 



const addnotes = function(title, body){
    const notes = loadNotes() 

    const duplicatenotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicatenotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log("new notes added")
    } else{
        console.log("note title already taken")
    }
    
    notes.push({
        title: title,
        body: body
    })

    savenotes(notes)    
}

const savenotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function(){

    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = databuffer.toString()
        return JSON.parse(dataJson) 

    } catch(e){
        return []
    }
}







module.exports = {
    getNotes: getNotes,
    addnotes: addnotes
}


