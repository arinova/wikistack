const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  res.send('all wiki pages');
});

// can use `curl -X POST localhost:3000/wiki/` from the terminal to test POST request
router.post('/', function(req, res, next){
  res.send('submit new wiki page');
});

router.get('/add', function(req, res, next){
  res.send('get `add a page` form');
});

module.exports = router;