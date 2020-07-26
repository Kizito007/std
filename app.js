const express = require('express'), app = express(), bodyParser= require('body-parser');

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
app.listen(3001, () => {
    console.log('Taking a Photo!');
});