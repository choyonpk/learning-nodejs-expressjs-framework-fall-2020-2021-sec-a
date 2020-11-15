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
           if ( status== 1 ) {
               res.redirect('/admin/home');             
           }
           else if(status== 2){
            res.redirect('/customer/home');             
        }
           else {
            //   res.send("Wrong username or password");
                res.redirect('/login');           
           }
       })

})




module.exports = router;