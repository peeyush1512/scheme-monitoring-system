const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();



router.get('/getdistcode',(req,res)=>{
    query="select distcode from district_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/getdistname',(req,res)=>{
    query="select distnameen from district_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.post('/adddist',(req,res)=>{
    let body=req.body;
    query="insert into district_master(distcode,distname)values(?,?);"
    connection.query(query,[body.distcode,body.distname],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})













module.exports = router