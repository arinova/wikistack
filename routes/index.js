const express= require('express');
const router= express.Router();

router.get('/', function(res, req, next){
  res.render('index');
});


module.export= router;
