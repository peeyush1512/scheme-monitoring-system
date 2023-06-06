const express = require('express');
require('dotenv').config();
let { query } = require('express');
const connection = require('../connection');
const router = express.Router();


router.post('/loginuser', (req, res) => {
    let user = req.body;
    // query = "select id,username,name,age,email,mobile,role from registration where name=? && password=?"
    query = "select username from registration where username=?";
    connection.query(query, [user.username], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                query = "select id,username,name,age,email,mobile,role  from registration where username=? and password=?";
                connection.query(query,[user.username,user.password],(err,result)=>{
                    if(!err){
                        if(result.length>0){
                            return res.json(result)
                        }
                        else{
                            return res.json({message:"password is wrong"});
                        }
                    }else{
                        return res.json(err);
                    }
                })
            } else {
                return res.json({ message: "user name is invalid" });
            }
        }else{
            return res.json({error:err});
        }
    })
})





router.get('/usertype/:id',(req,res)=>{
    const id = req.params.id;
    query="select username,role from registration where id=?";
    connection.query(query,[id],(err,result)=>{
        if(!err){
            if(result.length>0){
                if(result[0].role == 1 ){
                    return res.json({message:"state",navigate:"home"});
                }else if(result[0].role == 2){
                    return res.json({message:"district",navigate:"home"});
                }else if(result[0].role == 3){
                    return res.json({message:"hospital",navigate:"loginlospital"});
                }else{
                    return res.json({error:"invalid",navigate:"login"});
                } 
            }
        }
    })
})


















module.exports = router;