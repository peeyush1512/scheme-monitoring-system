
require('dotenv').config();

// import { createPool } from 'mariadb';
const mariadb = require('mysql');


const connection = mariadb.createPool({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    
    })
connection.getConnection( (err)=>{
            if(!err)
                console.log("ok");
            else
                console.log(err);
    });

    
module.exports = connection;



    // const pool = mariadb.createPool({
    //     host:'localhost',
    //     user:'root',
    //     password:'12345678',
    //     database:'nic'
    
    // })
    // try {
    
    //     let con =  pool.getConnection()
    //     let rows = con.query("INSERT INTO registration(name,password,email,mobile,age) VALUES('nic18','nic@123','nic1@gov.in','7546310137',20)");
    //             console.log("ok");
    // } catch (error) {
    //     console.log(error);
    // }

// const pool = mariadb.createPool({
//     host:'localhost',
//     user:'root',
//     password:'12345678',
//     database:'nic'

// })