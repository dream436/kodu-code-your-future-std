//  console.log("hello deepasshi")
require('dotenv').config();

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const student = require('./model/student')

const comment = require('./model/comments')
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
        res.redirect('index')
    } catch (error) {
        res.render('error')
    }

})


app.get('/admin',(req,res)=>{
    res.render('admin')    
})


app.get('/signup',(req,res)=>{

    res.render('signup')
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.get('/student/?',(req,res)=>{
    res.render('single_student')
})


app.get('/all',(req,res)=>{
    student.find().then((result)=>{
        res.send(result);
    } ).catch((error)=>{
        console.log(error)
    })
})




app.get('/student_data/:id',(req,res)=>{
    const id = req.params.id

    student.findById(id).then((result)=>{
        res.send(result)
    })
})



app.post('/student_comments', async (req,res)=>{
    
 
    try {

        const sdata = new comment({
            sid: req.body.s_id,
            scomment: req.body.s_comment
        })

        const postData = await sdata.save();
        res.redirect(`/student/?id=${req.body.s_id}`)
    } catch (error) {
        res.render('error')
    }


})


app.get('/comment_data/:id',(req,res)=>{
    const id = req.params.id
    comment.find({sid:id}).then((result)=>{
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
