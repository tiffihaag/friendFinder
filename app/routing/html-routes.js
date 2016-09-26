// Your html-routes.js file should include two routes:
var path = require('path')

// A GET Route to /survey which should display the survey page.
module.exports = function (app) {
app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// A default USE route that leads to home.html which displays the home page.
app.use('/home', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/home.html'));
        });
