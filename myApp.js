let express = require('express');
let app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/registro', function(req, res){
  res.sendFile(__dirname + '/views/registro.html');
})

app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })




































 module.exports = app;
