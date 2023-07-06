const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection');
const router=express.Router();



router.post('/post',(req,res)=>{
    let body=req.body;
    let returnobj=[];
    query="insert into ayushman_claims(districtname,noofclaims,claimamount)values(?,?,?);";
    // let query1="insert into role(usertype,roleid,userlevel)values(?,?,?);";
    connection.query(query,[body.data1,body.data2,body.data3],(err,result)=>{
        if(!err){
            returnobj.push(result)
        }else{
            returnobj.push(err)
        }
    })
    // query="insert into ayushman_claims(districtname,noofclaims,claimamount)values(?,?,?);";
    query="insert into role(usertype,roleid,userlevel)values(?,?,?);";
    connection.query(query,[body.data4,body.data5,body.data6],(err,result)=>{
        console.log('helll')
        if(!err){
            returnobj.push(result)
        }else{
            returnobj.push(err)
        }
    })
    return res.json(returnobj)

})












module.exports=router;