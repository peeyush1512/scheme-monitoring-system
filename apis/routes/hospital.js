const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();


router.get('/gethcode',(req,res)=>{
    query="select hospitalcode from hospital_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/gethospitalname',(req,res)=>{
    query="select hospitalname from hospital_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/gethospital',(req,res)=>{
    query="select * from hospital_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/addhospital',(req,res)=>{
    let body= req.body;
    query="insert into hospital_master(hospitalname,distcode)values(?,?);"
    connection.query(query,[body.hospitalname,body.distcode],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully iserteed"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})




module.exports = router