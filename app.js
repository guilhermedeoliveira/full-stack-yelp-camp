const express = require('express'),
      app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing_page');
});

app.get('/camps', function(req, res) {
  let camps = [
    { name: "Camp1" },
    { name: "Camp2" },
    { name: "Camp3" }
  ];
  res.render('camps', { camps });
});

app.listen(3000, function() {
  console.log('Server is running');
});
