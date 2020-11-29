const express = require('express');
// const { update } = require('../../model/userModel');
const um = require.main.require('./model/userModel');

const router = express.Router();


router.get('/home',(req,res)=>
{
    res.render('./customer/home');
})
router.get('/update',(req,res)=>
{
    if(req.session.username != null)
    {
    um.getByUname(req.session.username,(results)=>{
        res.render('./customer/update',{results})
    })
    }
    else
    {
        res.redirect("/login");
    }
   
})
router.post('/update',(req,res)=>
{
    var user = {
        name:req.body.name,
        username:req.session.username,
        password:req.body.password,
        address:req.body.address,
        contact:req.body.phone,
    };
    update(user , (status)=>{
        if(status)
        {
            res.redirect("/customer/home");
        }
        else
        {
            res.redirect("/customer/update");
        }
    })
})


module.exports = router;