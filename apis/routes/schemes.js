let { query } = require('express');
const express = require('express');
require('dotenv').config();
const connection = require('../connection');
const router = express.Router();




router.get('/schemelist',(req,res)=>{
    query="select schemename from scheme_master"
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.get('/getschemes',(req,res)=>{
    query="select * from scheme_master"
     connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



router.get('/gettotal',(req,res)=>{
    query="select count(*) as total from scheme_master; "
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.post('/addscheme',(req,res)=>{
    let data=req.body;
    query="select * from scheme_master where schemename=?"
    connection.query(query,[data.schemename],(err,results)=>{
        if(!err){
            if(results.length>0){
                return res.status(400).json({message:"scheme name already exist."})
            }
            else{
                query="insert into scheme_master(schemename,schemeid,schemeapi)values(?,?,?)"
                connection.query(query,[data.schemename,data.schemeid,data.schemeapi],(err,results)=>{
                    if(!err){
                        return res.status(200).json({message:"succesfully inserted"});
                    }else{
                        return res.status(400).json(err);
                    }
                })
            }
        }else{
            return res.status(500).json(err);
        }
    })
})





module.exports = router;