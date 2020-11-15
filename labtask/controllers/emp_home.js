const express = require('express');
const userModel = require.main.require('./models/userModel')
router = express.Router();

router.get('*', (req, res, next)=>{
	if(req.cookies['uname']){
		next();
	}else{
		res.redirect('/login')
	}
});

router.get('/', (req, res)=>{
	res.render('emp_home/index', {name: req.body.username, id : '123'});
	
});

router.get('/joblist', (req, res)=>{
	userModel.getAllJob(function(results){
		
		res.render('emp_home/joblist', {jobs: results});
	});
	
	
});

module.exports = router