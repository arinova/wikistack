const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const nunjucks=require('nunjucks');
const path=require('path');

const app= express();

const router =require('./routes');
const wikiRouter = require('./routes/wiki');
const models=require('./models');


// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


app.use(router);
app.use('/wiki', wikiRouter);

app.use(express.static(path.join(__dirname, '/public')));


/*Sequelize Models */
models.User.sync({})
  .then(function(){
    return models.Page.sync({});
  })
  .then(function(){
    app.listen(3000, () => console.log("Server listening on port 3000.."));
  })
  .catch(console.error);




// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
