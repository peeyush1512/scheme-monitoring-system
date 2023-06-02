const express = require('express');
const connection = require('../connection');
require("dotenv").config();
const router = express.Router();
const nodemailer = require('nodemailer');
let query = require('express');

router.post('/change', (req, res) => {
    body = req.body;
    query = "select * from registration where name=? && password = ?";
    connection.query(query, [body.name, body.password], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                query = "update registration set password = ? where name =?";
                connection.query(query, [body.newpassword, body.name], (error, result1) => {
                    if (!error) {
                        res.status(200).json({ update: "Password Update Successfully" });
                    }
                    else {
                        res.status(500).json(error);
                    }
                })
            } else {
                res.status(404).json({ usererror: "Invalid User or Password" });
            }
        } else {
            res.status(500).json(err);
        }
    })

})



router.get('/getuser/:username', (req, res) => {
    let body = req.params.username;
    query = "select id,username,name,age,mobile,email,distname from registration where username=?";
    connection.query(query, [body], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                return res.send(result);
            } else {
                return res.send({ message: "user not valid" })
            }
        } else {
            return res.send(err);
        }
    })
})


router.post('/forget', (req, res) => {
    let body = req.body;

    let otp = Math.floor(100000 + Math.random() * 900000);
    let transport = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        service: "gmail",
        type: "OAuth2",
        auth: {
            user: process.env.email_user,
            pass: process.env.email_password
        }
    });
    const mailOptions = {
        from: 'peeyush122000@gmail.com', // Sender address
        to: body.email, // List of recipients
        subject: 'mail test', // Subject line
        text: 'your OTP is "' + otp + '"\n do not share this otp', // Plain text body
    };
    transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            return res.json({ message: "error", err })

        } else {

            return res.json(otp)
        }
    });
})



















module.exports = router;