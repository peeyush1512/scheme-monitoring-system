const express = require('express');
require('dotenv').config();
let cors =require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/user',userRoute);
app.listen(process.env.PORT_SERVER || 3001,()=>{console.log("port",process.env.PORT_SERVER  )});

module.exports = app;