const mongoose = require('mongoose')

const sudentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
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
        required : true
    },
    course:{
        type : String
    },
    campus:{
        type : String
    },
    category:{
        type: String,
        default : "prespect"
    }
},{timestamps: true})


const student = new mongoose.model('studentcollection', sudentSchema);
module.exports = student;