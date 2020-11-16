const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{

    req.session.username = null;
    console.log( req.session.username  );
    res.redirect('/login');
	
});


module.exports = router;
