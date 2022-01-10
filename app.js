
require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const app=express()

mongoose.connect(process.env.url)
const con=mongoose.connection
con.on('error',(error)=>{
    console.log(error);
})

con.on('open',()=>{console.log("am connected properly");})

const router=require('./routes/routes')
app.use('/routes',router)

app.listen(9000,()=>{
    console.log("app is listning ");
    console.log('of course this is sample project for my tesis project')
}) 