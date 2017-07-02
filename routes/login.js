const express = require('express');
const router = express.Router();
const models = require('../models');




router.get('/login',function(req,res){
	res.render('login');
});




// let users = [{username:'caseycasey',password:'caseycasey'},
// 	{username:'aubreyaubrey',password:'aubreyaubrey'}];
let users = [];
let messages = [];
	let loggedUser;

router.post('/login',function(req,res){
	messages = [];
	users.forEach(function(user){
		if(user.username === req.body.username){
			loggedUser = user;
		}
	});
	console.log("the logged user is " + loggedUser);


	// run checks on the data coming in from the form
	req.checkBody('username','Make sure to enter a valid username.(3-20 characters)').isLength({min:3,max:20});
	req.checkBody('password','Make sure to enter a valid Password.(8-20 characters)').isLength({min:8,max:20});
	// req.checkBody('password','Invalid combination of password and username').equals(loggedUser.password);

	// make an array to hold the errors from validation
	let errors = req.validationErrors();
	if(errors){
		errors.forEach(function(error){
			messages.push(error.msg);
		});
		res.render('login',{errors:messages});
	}
	// if this user was new, then assign their information to the session
	else{
		console.log("entering else just before setting username")
		req.session.username = req.body.username;
		users.push({username:req.body.username,password:req.body.password});
		console.log("username on session is " + req.session.username);
		console.log(users)
		res.redirect('/home')
	} 

});
// module.exports = router;