const User = require('../models/user');
const nodemailer = require("nodemailer");

const router = require('express').Router();


const sendMail = (msg) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshil.s.pethani9957@gmail.com',
            pass: process.env.EMAILPASSWORD
        }
    });

    var mailOptions = {
        from: 'harshil.s.pethani9957@gmail.com',
        to: 'harshilpethani8990@gmail.com',
        subject: 'Response From Portfolio Website',
        text: `Username : ${msg.name} \n Mobile No. : ${msg.mobile} \n Email : ${msg.email} \n Message : ${msg.msg}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email Sent");
        }
    })
}

router.post('/', async (req, res) => {
    const msg = new User(req.body);
    sendMail(msg);
    try {
        const savedMsg = await msg.save();

        res.status(200).send(savedMsg);

    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});






module.exports = router;
