
//const router = require("express").Router();
import express from "express";
const router = express.Router();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import service from "../../features/support-system/emails/service.js"
//import EmailModel from "../../features/support-system/chatbot/emails/model.js";
const nodemailer = require('nodemailer');
require("dotenv").config();


router.post('/', function (req, res) {

    const mailOptions =
    {
        to: req.body.to,
        subject: req.body.subject,
        //must be text
        text: req.body.text
    }
    service.sendEmail(mailOptions, res);
});



router.post('/createEmail', function (req, res) {
    const emailContent =
    {
        subject: req.body.subject,
        text: req.body.text
    }
    service.createEmail(emailContent, res);
});

router.post('/:id', function (req, res) {
    // האם לא צריך להוציא את ה to מה req??
    //וכן לגבי ה id  אלא אם כן מגיע בפרמס.
    let to = req.body.to;
    let id = req.params.id;
    service.sendEmailById(id, to, res);
});


router.get('/', async (req, res) => {
    let data = await service.getAllEmails();
    res.json(data);
});

router.get('/:id', async (req, res) => {
    let data = await service.getEmailById(req.params.id);
    res.json(data);
});

router.put('/:id', async (req, res) => {
    console.log('i update, req,body:', req.body.subject);
    console.log('i update, req,body with parse json:', req.body.text);
    let data = await service.updateEmail(req.params.id, /*JSON.parse(*/req.body/*)*/);
    res.json(data);
})

router.delete('/:id', async (req, res) => {
    console.log('delete product');
    let data = await service.deleteEmail(req.params.id);
    res.json(data);
})

// שליחה המונית
// לא בטוח שנצרך מיוחד מכיוון שאפשר לשרשר כמה כתובות באותה מחרוזת ואז עובד מצוין ברגיל
// router.post('/sendEmails/:id', function (req, res) {
//     let to = req.body.to;
//     service.sendEmailsById(id, to, res);
// });

// router.post('/sendEmails', function (req, res) {
//     // const mailOptions =
//     // {
//     let to = req.body.to;
//     let subject = req.body.subject;
//     let text = req.body.text;
//     // }
//     service.sendEmails(to,subject,text, res);
// });

//module.exports = router;
export default router;