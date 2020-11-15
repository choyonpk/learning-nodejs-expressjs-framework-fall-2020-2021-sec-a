const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel')

router.get('*', (req, res, next)=>{
	if(req.cookies['uname']){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/create', (req, res)=>{
	
	res.render('employee/create');
	
});

router.post('/create', (req, res)=>{
	var job = {
		name : req.body.name,
		jobname : req.body.jobname,
		joblocation : req.body.Location,
		salary : req.body.salary
	}
	userModel.insertjob(job, function(status){
		if(status){
			res.redirect('/emp_home/joblist');
		}else{
			res.redirect('/employee/create');
		}
	});
});

router.get('/edit/:id/:comname/:jobtitle/:joblocation/:salary', (req, res)=>{
	var currentjob = {
		comname : req.params.comname,
		jobtitle : req.params.jobtitle,
		joblocation : req.params.joblocation,
		salary: req.params.salary
	};
	res.render('employee/edit', currentjob);
});

router.post('/edit/:id/:comname/:jobtitle/:joblocation/:salary', (req, res)=>{
	var currentjob = {
		id : req.params.id,
		comname : req.body.comname,
		jobtitle : req.body.jobtitle,
		joblocation : req.body.joblocation,
		salary: req.body.salary
	};
	userModel.updateJob(currentjob, function(status){
		if(status){
			res.redirect('/emp_home/joblist');
		}else{
			res.redirect('/employee/edit');
		}
	});
});

router.get('/delete/:id/:comname/:jobtitle/:joblocation/:salary', (req, res)=>{
	
	var currentjob = {
		comname : req.params.comname,
		jobtitle : req.params.jobtitle,
		joblocation : req.params.joblocation,
		salary: req.params.salary
	};
	res.render('employee/delete', currentjob);
});

router.post('/delete/:id/:comname/:jobtitle/:joblocation/:salary', (req, res)=>{

	var currentjob = {
		id : req.params.id
	};
	userModel.deletejob(currentjob, function(status){
		if(status){
			res.redirect('/emp_home/joblist');
		}else{
			res.redirect('/employee/delete');
		}
	});
});

module.exports = router;