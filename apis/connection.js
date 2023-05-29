
require('dotenv').config();
const { log } = require('console');
const fs = require('fs');
const mariadb = require('mysql');


var sql = fs.readFileSync('NIC.sql').toString();

const connection = mariadb.createPool({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    
    })
 
    connection.getConnection((err,client)=>{
        if(!err){
            console.log('Connected');
            // client.query(sql,(error,result)=>{
            //     if(error){
            //         console.log(error);
            //     }
            //     else{
            //         console.log(result);
            //      }
            // })
        }
        else{
            console.log(err);
        }
    })


// connection.getConnection( (err,client,done)=>{
//     if(err){
//         console.log('error: ', err);
//         process.exit(1);
//     }
//     client.query(sql, function(err, result){
//         done();
//         if(err){
//             console.log('error: ', err);
//             process.exit(1);
//         }
//         process.exit(0);
//     });
//     });




// pg.connect('postgres://test:test@localhost/test', function(err, client, done){
//     if(err){
//         console.log('error: ', err);
//         process.exit(1);
//     }
//     client.query(sql, function(err, result){
//         done();
//         if(err){
//             console.log('error: ', err);
//             process.exit(1);
//         }
//         process.exit(0);
//     });
// });
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