const express = require('express');
let { query } = require('express')
const connection = require('../connection');
const router = express.Router();




router.get('/getmisreport',(req,res)=>{
    query="select * from ayushman_claims;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results); 
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/addmisreport',(req,res)=>{
    let body= req.body;
    query="insert into ayushman_claims(districtname,noofclaims,claimamount) values(?,?,?);"
    connection.query(query,[body.districtname,body.noofclaims,body.claimamount],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})






module.exports =router;