const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>
{
    res.render('./admin/home',{name : req.session.username});//have to add session check
})


module.exports = router;