const express = require('express');
const router = express.Router();

var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next){

    res.redirect("/");
});

// // can use `curl -X POST localhost:3000/wiki/` from the terminal to test POST request
// router.post('/', function(req, res, next){
//   res.json(req.body);
//
// });

router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
    .then(function(page){
      //res.redirect('/');
      res.json(page);
    })
    .catch(console.error)

});






router.get('/add', function(req, res, next){
  res.render('addpage');
});

module.exports = router;
