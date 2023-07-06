const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();



router.get('/getsection',(req,res)=>{
    query="select * from section_master";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json({message:"error",err});
        }
    })
})

router.post('/getsubsection',(req,res)=>{
    let body=req.body;
    query="select * from subsection_master where sectionid=?";
    connection.query(query,[body.sectionid],(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json({message:"error",err});
        }
    })
})



router.post('/addsection',(req,res)=>{
    let body=req.body;
    query="insert into section_master(sectionname)values(?);";
    connection.query(query,[body.sectionname],(err,result)=>{
        if(!err){
            return res.json({message:"successfully add",result});
        }else{
            return res.json(err);
        }
    })
})


router.post('/addsubsection',(req,res)=>{
    let body=req.body;
    query="insert into subsection_master(sectionid,subsectionname)values(?,?);";
    connection.query(query,[body.sectionid,body.subsetionname],(err,result)=>{
        if(!err){
            return res.json({message:"successfully add",result});
        }else{
            return res.json(err);
        }
    })
})










module.exports=router