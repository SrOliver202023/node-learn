const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const data = require('./data.json');
/*
const {
  indexRouter,
  amyRouter,
  bmyRouter
} = require('./routes');*/

nunjucks.configure('sources/views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');
app.use(express.static('public'));


app.get("/home", function(req, res){
  res.render('index.html');
});


app.listen(3000, (err) => {
  if(err){
    return console.log('erro');
  }
  console.log('iniciou');
});