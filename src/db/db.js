require('dotenv').config()

const mongoose = require('mongoose')

const Mongo_url = process.env.MONGO_URL

mongoose.connect(Mongo_url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(()=>{
    console.log('connected to database')
}).catch((error)=>{
    console.log(error)
})
