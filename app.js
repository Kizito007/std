const express = require('express'), app = express(), bodyParser= require('body-parser');
//Heroku Deploy 
port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("landing");
});
app.get('/services', (req, res) => {
    res.render("servicees/services")
});
app.get('/services/eventCoverage', (req, res) => {
    res.render("servicees/event")
});
app.get('/services/outdoorShoot', (req, res) => {
    res.render("servicees/outdoor")
});
app.get('/services/studioShoot', (req, res) => {
    res.render("servicees/studio")
});
app.get('/services/photographyTraining', (req, res) => {
    res.render("servicees/training")
});
app.get('/contact', (req, res) => {
    res.render("contact")
});
app.get('/locate', (req, res) => {
    res.render("locate")
});
app.listen(process.env.PORT || 5000, () => {
    console.log('Taking a Photo!');
});