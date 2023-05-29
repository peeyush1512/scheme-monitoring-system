let svgcaptcha = require('svg-captcha');
const express = require('express');
const router = express.Router();

router.get('/captcha',(req, res)=>{
    let captcha = svgcaptcha.create(6);
    // res.type('svg');
    // captcha.text= JSON.stringify(captcha.text)
    return res.json(captcha);
});





 








module.exports =router;
