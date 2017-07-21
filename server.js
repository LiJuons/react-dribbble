var express = require('express');
const path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){  //redirects https traffic to http
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname+'/src'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
