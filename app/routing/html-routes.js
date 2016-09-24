// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, 'survey.html'));
});

// A default USE route that leads to home.html which displays the home page.
app.use('/home', home);