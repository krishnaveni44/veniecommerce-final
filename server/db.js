const mongoose = require("mongoose");


var mongoDBURL = 'mongodb+srv://moviesdatabase:welcome123@cluster0.aiiaa.mongodb.net/mernecommerce'


mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true}).then(()=>console.log('Connected to db'))
.catch((err)=> console.log("DB connection error",err));


// var dbconnect = mongoose.connection

// dbconnect.on('error' , ()=>{
//     console.log(`Mongo DB Connection Failed`);
// })

// dbconnect.on('connected' , ()=>{
//     console.log(`Mongo DB Connection Successfull`);
// })

module.exports = mongoose
