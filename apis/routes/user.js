let { query } = require('express');
const express = require('express');
require('dotenv').config();
const connection = require('../connection');
const router = express.Router();


//registration table
router.get('/totaluser',(req,res)=>{
    query="select count(*) as total from registration; "
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
    query="select id,name,age,mobile,email,distname from registration where id=?; "
    connection.query(query,[body.id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



router.get('/getdata',(req,res)=>{
    query="select id , name,email, age, mobile  from registration; "
    connection.query(query,(err,results)=>{
        if(!err){
            return res.send(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



router.post('/loginuser',(req,res)=>{
    let user = req.body;
    query = "select id,name,age,email,mobile,role from registration where name=? && password=?"
    connection.query(query,[user.name,user.password],(err,results)=>{
        if(!err){
            if(results.length <= 0 ){
                return res.status(200).json({message:"user dose not exist."});
                
                // return res.status(400).json(0);
            }
            else{
                return res.status(200).json(results);
                // return res.status(200).json(1);
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.post('/registrationuser',(req,res)=>{
    let user = req.body;
    query = "select * from registration where name=?"
    connection.query(query,[user.name],(err,results)=>{
        if(!err){
            if(results.length <=0){
                query = "insert into registration(name,email,password,age,mobile)values(?,?,?,?,?)"
                connection.query(query,[user.name,user.email,user.password,user.age,user.mobile],(err,results)=>{
                    if(!err){
                        return res.status(200).json({message:"sucessfully inserted"});
                    
                    }
                    else{
                        // return res.status(500).json(err);
                        res.write("some some think is wrong")
                    }
                })
            }else {
                
                return res.status(400).json({message:"already exist user name"});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})










//user table
router.post('/update',(req,res)=>{
    let user = req.body;
    query="update users set username=?, password=?,email=? where id = ?"
    connection.query(query,[user.username,user.password,user.id,user.email],(err,results)=>{
        if(!err){
            if(results){
                return res.status(200).json({message:"update user "});
            }
            else{
                return res.status(400).json({message:"user not exist."})
            }
        }
        else{

            return res.status(500).json(err);
        }
    })
})








module.exports = router

// //registration user
// router.post('/registration',(req,res)=>{
//     let user = req.body;
//     query = "select * from users where username=?"
//     connection.query(query,[user.username],(err,results)=>{
//         if(!err){
//             if(results.length > 0){
//                 return res.status(400).json({message:"already exist user name"});
          
//             }else {
//                 query = "insert into users(username,email,password)values(?,?,?)"
//                 connection.query(query,[user.username,user.email,user.password],(err,results)=>{
//                     if(!err){
//                         return res.status(200).json({message:"sucessfully inserted"});
//                     }else{
//                         return res.status(500).json(err);
//                     }
//                 })
//             }
//         }else{
//             return res.status(500).json(err);
//         }
//     })
// })


// router.get('/regg',(req,res)=>{
//     connection.query("select * from users",(err,results)=>{
//         if(err){
//             return res.status(500).json(err);
//         }
//         else{
//             return res.status(200).json(results);
//         }
//     })
// })
//user login or check user    
// router.post('/login',(req,res)=>{
//     let user = req.body;
//     query = "select * from users where username=? && password=?"
//     connection.query(query,[user.username,user.password],(err,results)=>{
//         if(!err){
//             if(results.length <= 0 ){
//                 return res.status(400).json({message:"user dose not exist."});
                
//                 // return res.status(400).json(0);
//             }
//             else{
//                 return res.status(200).json(results);
//                 // return res.status(200).json(1);
//             }
//         }
//         else{
//             return res.status(500).json(err);
//         }
//     })
// })

// res.status(200).json(results) 
//             return res.status(400).json({message:"user dose not exist"});
// query = "insert into users(username,email,password)values(?,?,?)"
// connection.query(query,[user.username,user.email,user.password],(err,results)=>{
//     if(!err){
//         if(results.length <=0){
//             return res.status(400).json({message:"user dose not exist"});
//         }
//         res.status(200).json(results)
//     }
//     else{
//         return res.status(500).json(err);
//     }
// })

