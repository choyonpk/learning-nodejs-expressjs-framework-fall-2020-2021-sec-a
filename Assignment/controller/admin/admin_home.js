const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>
{
    if(req.session.username != null)
    {
    res.render('./admin/home',{name : req.session.username});
    }
    else
    {
        res.redirect('/login');
    }
})


module.exports = router;