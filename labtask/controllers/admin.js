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
	
	res.render('admin/create');
	
});

router.post('/create', (req, res)=>{
	var user = {
		name : req.body.name,
		companyname : req.body.companyname,
		number : req.body.number,
		username : req.body.username,
		password : req.body.password
	}
	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/admin/create');
		}
	});
});

router.get('/edit/:id/:name/:companyname/:number/:username/:password', (req, res)=>{
	var currentUser = {
		name : req.params.name,
		companyname : req.params.companyname,
		number : req.params.number,
		username: req.params.username,
		password: req.params.password
	};
	res.render('admin/edit', currentUser);
});

router.post('/edit/:id/:name/:companyname/:number/:username/:password', (req, res)=>{
	var user = {
		id : req.params.id,
		name : req.body.name,
		companyname : req.body.companyname,
		number : req.body.number,
		username: req.body.username,
		password: req.body.password
	};
	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/admin/edit');
		}
	});
});

router.get('/delete/:id/:name/:companyname/:number/:username/:password', (req, res)=>{
	
	var currentUser = {
		name : req.params.name,
		companyname : req.params.companyname,
		number : req.params.number,
		username: req.params.username,
		password: req.params.password
	};
	res.render('admin/delete', currentUser);
});

router.post('/delete/:id/:name/:companyname/:number/:username/:password', (req, res)=>{

	var user = {
		id : req.params.id
	};
	userModel.delete(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/admin/delete');
		}
	});
});

module.exports = router;