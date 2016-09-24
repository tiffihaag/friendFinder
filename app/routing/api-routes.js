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

		// Determine the user's most compatible friend using the following as a guide:

		// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
		// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
		// Example:
		// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
		// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
		// Total Difference: 2 + 1 + 2 = 5
		// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
		// The closest match will be the user with the least amount of difference.

		// Search for Specific Character (or all characters) - provides JSON
			
		var chosen = req.params.friend;

		var differences = [];
		var runningDiff = 0;

			for (var i = 0; i < friend.length; i++) {
				for(var x = 0; x > friend[i].scores.length; x++) {
					runningDiff = runningDiff + math.abs(userData.scores[x] - friend[i].scores[x]);
				}
				differences[i] = runningDiff;
				runningDiff = 0;
			}
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