const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();



router.get('/getid',(req,res)=>{
    query="select immunizationid from immunization_master;";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/addimmunization',(req,res)=>{
    let body = req.body;
    query="insert into immunization_master(immunizationid,immunizationname,immunizationfullname)values(?,?,?);";
    connection.query(query,[body.immunizationid,body.immunizationname,body.immunizationfullname],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.get('/getimmunization',(req,res)=>{
    query="select * from immunization_master;";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/addimmunizationentry',(req,res)=>{
    let body = req.body;
    query="insert into immunization_details_entry(hospitalcode,immunizationid,entrydate,noofimmunization)values(?,?,?,?);";
    connection.query(query,[body.hospitalcode,body.immunizationid,body.entrydate,body.noofimmunization],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.get('/getimmunizationentry',(req,res)=>{
    query="select * from immunization_details_entry";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})






module.exports = router