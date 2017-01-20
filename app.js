const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const nunjucks=require('nunjucks');

const app= express();

app.use('/', function(req, res, next){
  res.send("Hey");
});

app.get('/', function(req, res, next){

});

app.listen(3000, () => console.log("Server listening on port 3000.."));
