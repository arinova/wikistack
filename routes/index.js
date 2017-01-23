const express= require('express');
const router= express.Router();

router.get('/', function(req, res, next){
  res.render("../views/index");
});

router.get('/', function(req, res, next){
  res.render("../views/index");
});


module.exports= router;
