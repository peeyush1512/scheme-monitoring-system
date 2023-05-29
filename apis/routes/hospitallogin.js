const express = require('express');
let query= require('express');
require('dotenv').config();
const connection = require('../connection');
const router=express.Router();

router.get('/getdata',(req,res)=>{
    query="select * from hospital-login;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/getspeciality',(req,res)=>{
    query="select * from speciality_master;"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.get('/profile/:id',(req,res)=>{
    let body=req.params;
    query="select id,mobile,email,hospitalcode,noofopd,noofipd,totalbedoccupied,totalayushman from hospital_login where id=?; "
    connection.query(query,[body.id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/adddata',(req,res)=>{
    let body=req.body;
    query="insert into hospital_login(hospitalcode,password,noofopd,noofipd,totalbedoccupied,totalayushman,mobile,email)values(?,?,?,?,?,?,?,?);"
    connection.query(query,[body.hospitalcode,body.password,body.noofopd,body.noofipd,body.totalbedoccupied,body.totalayushman,body.mobile,body.email],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})






module.exports = router;