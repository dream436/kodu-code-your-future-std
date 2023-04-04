//  console.log("hello deepasshi")
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const student = require('./model/student')
const temp_path = path.join(__dirname, '../template/views')

app.set('view engine', 'hbs')

app.set('views', temp_path)

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


require('./db/db')

app.get('/', (req, res) => {
    res.render('index')
})


app.post('/student_data', async (req, res) => {

    try {

        const sdata = new student({
            name: req.body.firstname,
            lastname: req.body.lastname,
            mothername: req.body.mothername,
            fathername: req.body.fathername,
            address: req.body.address,
            phone: req.body.phone_number,
            course: req.body.course,
            campus: req.body.campus
        })

        const postData = await sdata.save();
        res.render('index')
    } catch (error) {
        res.render('error')
    }

})


app.get('/admin',(req,res)=>{
    res.render('admin')
    
})

app.get('/all',(req,res)=>{
    student.find().then((result)=>{
        res.send(result);
    } ).catch((error)=>{
        console.log(error)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})