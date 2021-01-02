const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Welcome Home');
})

//Import routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);



//Database connection
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>{
    console.log('DB Connected')
})


//server 
app.listen(3000);