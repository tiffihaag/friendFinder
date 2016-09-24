//server.js

//Require packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setup express server
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Require use of js file
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//listening on the port for changes
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});