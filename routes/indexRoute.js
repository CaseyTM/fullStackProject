// establish router needs
const express = require('express');
const router = express.Router();
// const models = require("./models");
// set up root route to take us to the main page
router.get('/',function(req,res){
	// if not logged in, redirect to login

	console.log("HHHHHHEEEEEEEEEEEYYYYYYYYYY",req.session)
	// otherwise, send to home page
	res.redirect('/home');
});

router.get('/home',function(req,res){
	res.render('login');
});

module.exports = router; 