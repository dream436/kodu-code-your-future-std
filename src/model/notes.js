const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    sid:{
       type: mongoose.Schema.Types.ObjectId,
       ref : 'studentcollection'
       
    },
    snote:{
        type : String,
      
    }
},{timestamps : true})


const Notes = new mongoose.model('Notes', notesSchema);
module.exports = Notes;