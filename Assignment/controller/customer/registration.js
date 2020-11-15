const express = require('express');
const um = require.main.require('./model/userModel');


const router = express.Router();


router.get('/',(req,res)=>
{
    res.render('./customer/registration');
})
router.post('/',(req,res)=>
{
   var user = {
       name:req.body.name,
       username:req.body.username,
       password:req.body.password,
       gender:req.body.gender,
       address:req.body.address,
       contact:req.body.phone,
       user_type:2
   };
   um.insert(user,(status)=>{
    if ( status ) {     
        res.redirect('/login');           
    }
    else{
        res.redirect('/registration');             
    }
   })

})


module.exports = router;