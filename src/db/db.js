const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://deepaashi:mandeeplamba@cluster0.zsfx3ym.mongodb.net/kodu?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(()=>{
    console.log('connected to database')
}).catch((error)=>{
    console.log(error)
})