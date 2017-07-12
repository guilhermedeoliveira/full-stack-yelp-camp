const express = require('express'),
      app = express();

app.get('/', function(req, res) {
  res.send('This is the landing page');
});

app.listen(3000, function() {
  console.log('Server is running');
});
