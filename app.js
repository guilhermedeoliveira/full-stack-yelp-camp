const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const camps = [
  { name: "Camp1" },
  { name: "Camp2" },
  { name: "Camp3" }
];

app.get('/', function(req, res) {
  res.render('landing_page');
});

app.get('/camps', function(req, res) {
  res.render('camps', { camps });
});

app.post('/camps', function(req, res) {
  const name = req.body.camp;
  const newCamp = { name };
  camps.push(newCamp);
  res.redirect('/camps');
});

app.get('/camps/new', function(req, res) {
  res.render('new');
});

app.listen(3000, function() {
  console.log('Server is running');
});
