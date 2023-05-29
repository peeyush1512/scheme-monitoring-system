const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();


router.get('/gethcode',(req,res)=>{
    query="select hospitalcode from hospital_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.send().json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



router.get('/getipd',(req,res)=>{
    query="select * from ipd_details_entry;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



router.post('/addipd',(req,res)=>{
    let body=req.body;
    query="insert into ipd_details_entry(hospitalcode,entrydate,noofcasereported,speciality)values(?,?,?,?);"
    connection.query(query,[body.hospitalcode,body.entrydate,body.noofcasereported,body.speciality],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})




module.exports = router