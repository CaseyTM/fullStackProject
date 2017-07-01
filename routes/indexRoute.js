// establish router needs
const express = require('express');
const router = express.Router();
const models = ""; 
// require("./models");
let gabbles = ["im the first gabbleim the first gabbleim the first gabbleim the first gabbleim the first gabbleim the first gabble", "im the second gabbleim the second gabbleim the second gabbleim the second gabbleim the second gabbleim the second gabbleim the second gabble",
	"im the third gabble","im the fourthim the fourthim the fourth"]
 


// set up root route to take us to either the main page or to login
router.get('/',function(req,res){

	console.log("just inside the root route " +req.session.username)
	console.log(req.session)

	// if logged in then send to the main page with user info

	if(req.session.username){	

		
		// res.render('index',{userName: "Casey"});
		res.redirect('/home');

		// res.render('index',{userName: req.session.user});
	}else{
		res.redirect('/login');

	}
	
});
 

router.get('/login',function(req,res){
	res.render('login');
});




// let users = [{username:'caseycasey',password:'caseycasey'},
// 	{username:'aubreyaubrey',password:'aubreyaubrey'}];
let users = [];
let messages = [];

router.post('/login',function(req,res){
	let loggedUser;
	messages = [];
	users.forEach(function(user){
		if(user.username === req.body.username){
			loggedUser = user;
		}
	});
	console.log("the logged user is " + loggedUser);


	// run checks on the data coming in from the form
	req.checkBody('username','Make sure to enter a valid username. It must contain at least 3 characters and no more than 20').notEmpty().isLength({min:3,max:20});
	req.checkBody('password','Make sure to enter a valid Password.').notEmpty().isLength({min:8,max:20});
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

router.get('/home',function(req,res){
	res.render('index',{message:gabbles});
});

module.exports = router;     