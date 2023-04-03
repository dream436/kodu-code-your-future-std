const mongoose = require('mongoose')

const sudentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    mothername : {
        type : String,
    },
    fathername : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phone:{
        type : Number,
        required : true,
        unique : true
    },
    course:{
        type : String,
    },
    campus:{
        type : String,
    }
})


const student = new mongoose.model('studentcollection', sudentSchema);
module.exports = student;