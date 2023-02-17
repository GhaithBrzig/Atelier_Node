const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');
const e = require("express");

router.get('/', (req, res, next) => {
   Contact.find((err, contacts) => {
       if (err) {
           console.log('error: ', err);
       } else {
           res.json({title:"liste des contacts", contacts: contacts});
       }
   })
});

router.post('/',(req, res, next) => {
 var contact = new Contact({
     fullname:req.body.contactName,
     phone: req.body.contactPhone
 })
    contact.save((err, newContact) => {
        if (err) {
            console.log('there is an error : ',err);
        }
        else {
            res.json(newContact);
        }
    });
});

module.exports = router;