let { query } = require('express');
const express = require('express');
require('dotenv').config();
const connection = require('../connection');
const router = express.Router();




router.get('/getspecialityname',(req,res)=>{
    query="select specialityname from speciality_master;"
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



router.post('/addspeciality',(req,res)=>{
    let body=req.body;
    query="insert into speciality_master(specialitycode,specialityname)values(?,?);"
    connection.query(query,[body.specialitycode,body.specialityname],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"succesfully inserted"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})




module.exports = router