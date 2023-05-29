const express =require('express');
require('dotenv').config();
let {query}=require('express');
const connection=require('../connection');
const router =express.Router();


router.get('/login',(req,res)=>{

    let body= req.body;
    query="select * from "
    
})


 
















module.exports = router;