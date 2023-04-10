const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    sid:{
       type: mongoose.Schema.Types.ObjectId,
       ref : 'studentcollection'
       
    },
    scomment:{
        type : String,
      
    }
},{timestamps : true})


const Comment = new mongoose.model('Comments', commentSchema);
module.exports = Comment;