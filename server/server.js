const express = require("express");
const bodyParser = require("body-parser");
const app = express()
var dbconnection = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
app.use(bodyParser.json());
const path = require('path');
app.use('/api/products/' , productsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)


    // if(process.env.NODE_ENV === 'production')
    // {
    //     app.use('/' , express.static('client/build'))

    //     app.get('*' , (req,res)=>{

    //         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))

    //     })


    // }

   

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));

// app.get('/', function (request, response)
// { 
//    response.send('Hello World ✨🎉✨')
// }); 


// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",
// "client-install": "npm install --prefix client",
// "client": "npm start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\"",
// "engines": {
//     "node": "14.x"
//   },