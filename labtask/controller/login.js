const express = require('express');
const um = require.main.require('./model/userModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('./login');
})


router.post('/',(req,res)=>
{
   var user = {
    username: req.body.username ,
    password : req.body.password
   };
   um.validate(user,(status) => {
           if (status) {
               res.redirect('/home');
           }
           else {
               // res.redirect('/home');
           }
       })

})




module.exports = router;