const express = require('express');
const router = express.Router();
const userModel = require.main.require('./models/userModel');


router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	var user = {
		username : req.body.username,
		password : req.body.password
	}
	userModel.validate(user, function(results){
		if(results){
			res.cookie('uname', req.body.username);
			if(results[0].usertype == 'admin'){
				res.redirect('/home');
			}else{
				res.redirect('/emp_home')
			}
			
		}else{
			res.redirect('/login');
		}
	});
	
	
} );

module.exports = router;