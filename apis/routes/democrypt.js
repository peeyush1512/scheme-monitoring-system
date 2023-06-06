const express = require('express');
const crypto = require('crypto-js');
require('dotenv').config();
const router = express.Router();



router.post('/getdata',(req,res)=>{
    // const encrypted = crypto.AES.encrypt(req.body.message,'123').toString();
    // console.log(encrypted,req.body.message);
    console.log(req.body.message);
    const decrypted = crypto.AES.decrypt(req.body.message,process.env.key_1).toString(crypto.enc.Utf8); 
    res.json(decrypted);
})

  





module.exports = router;

