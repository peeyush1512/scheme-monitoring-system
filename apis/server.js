require('dotenv').config();
const http = require('http');
const app = require('./index');

const server = http.createServer(app,console.log('connect'));

server.listen(process.env.PORT_SERVER,process.env.DB_HOST);




// require('dotenv').config();
// const http = require('http');
// const express = require('express');
// // let cors =require('cors');
// // const connection = require('./connection');
// // const userRoute = require('./routes/user');
// // const app = express();

// // app.use(cors());
// // app.use(express.urlencoded({extended : true}));
// // app.use(express.json());
// // app.use('/user',userRoute);
// // app.listen(process.env.PORT_SERVER || 3001,()=>{console.log("port",process.env.PORT_SERVER  )});
// // module.exports = app;

// const server = http.createServer(process.env.PORT_SERVER,console.log('connect'));

// server.listen(process.env.PORT_SERVER,process.env.DB_HOST,()=>{console.log(process.env.PORT_SERVER)});
