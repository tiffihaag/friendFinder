//api-routes.js

// LOAD DATA
var friendsFile = require('../data/friends.js');

// ROUTING
module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendsFile);
	});

// API POST  
	app.post('/api/friends', function (req, res) {
		// Here's where I want to match the user to the compatible person
		//........
		// sort
		// loop over all of em
		// compare new friend
		// if better than winner
		// then replace the winner


	});




// Your api-routes.js file should contain two routes:
var path = require("path")

exports.home = function(req, res){
	res.sendFile(path.join(__dirname, "../app/public/home.html"));
}

exports.survey= function(req, res){
	res.sendFile(path.join(__dirname, "../app/public/survey.html"));
}

exports.friends = function(req, res){
	res.json(friendsFile);
}

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/new', function (req, res) {
	var yourFriend = req.body;

	console.log(yourFriend);

	friends.push(yourFriend);

	res.json(yourFriend);
});