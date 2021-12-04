const express=require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan")

//Midddleware
app.use(morgan("dev"))
app.use(express.json())
//Router
const developerRouter = require("../Node-js-API/router/router")
app.use("/",developerRouter)
// DB Connection

const URI = 'mongodb+srv://shankar:1998Shankar@cluster0.blven.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("DB connected sucessfully")
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// mongoose.connect('mongodb://127.0.0.1:27017/developer',(err)=>{
//     if(!err){
// console.log("DB connected sucessfully")
//     }
// })

//port
app.listen(5000,()=>{
    console.log('server started')
})