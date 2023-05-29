const express = require('express');
const connection =  require('../connection');
require("dotenv").config();
const router = express.Router();
let query=require('express');

router.post('/change',(req,res)=>{
    body=req.body;
    query="select * from registration where name=? && password = ?";
    connection.query(query,[body.name,body.password],(err,result)=>{
        if(!err){ 
            if(result.length>0){
                query="update registration set password = ? where name =?";
                connection.query(query,[body.newpassword,body.name],(error,result1)=>{
                    if(!error){
                        res.status(200).json({update:"Password Update Successfully"});
                    }
                    else{
                       res.status(500).json(error);
                    }
                })
            }else{
                res.status(404).json({usererror:"Invalid User or Password"});
            }
        }else{
            res.status(500).json(err);
        }
    })
    
})















module.exports = router;