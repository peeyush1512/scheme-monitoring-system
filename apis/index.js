const express = require('express');
require('dotenv').config();
let cors =require('cors');
const bodyParser = require('body-parser')
const connection = require('./connection');
const userRoute1 = require('./routes/user');
const userRoute2 = require('./routes/schemes');
const userRoute3 = require('./routes/immunization');
const userRoute4 = require('./routes/ipd');
const userRoute5 = require('./routes/hospital');
const userRoute6 = require('./routes/dist');
const userRoute7 = require('./routes/speciality');
const userRoute8 = require('./routes/hospitallogin');
const userRoute9 = require('./routes/misreport');
const captcha =require('./routes/captcha');
const userRoute10 =require('./routes/apiscall');
const userRoute11 =require('./routes/callapi');
const userRoute12 =require('./routes/changepassword');
const userRoute13 =require('./routes/login');
const userRoute14 =require('./routes/democrypt');
const userRoute15 =require('./routes/demo');
const userRoute16 =require('./routes/section');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(bodyParser.json());
// app.use(express.captcha);
// app.use(express.response());
app.use('/captcha',captcha);
app.use('/user',userRoute1);
app.use('/schemes',userRoute2);
app.use('/ipd',userRoute4);
app.use('/immunization',userRoute3);
app.use('/hospital',userRoute5);
app.use('/dist',userRoute6);
app.use('/speciality',userRoute7);
app.use('/hospitallogin',userRoute8);
app.use('/misreport',userRoute9)
app.use('/apis',userRoute10)
app.use('/callapi',userRoute11)
app.use('/changepassword',userRoute12)
app.use('/login',userRoute13)
app.use('/crypt',userRoute14)
app.use('/demo',userRoute15)
app.use('/section',userRoute16)


app.listen(process.env.PORT_SERVER || 3001 );


module.exports = app;