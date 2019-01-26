var express = require('express');
var router = express.Router();
var theRace = require('../lib/race');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.dir(theRace);
  res.render('index', { title: 'Express', winner: theRace.findWinner() });
});

router.post('/', function(req, res, next) {
  const { color, speed } = req.body;
  theRace.addCar(color, speed);
  res.sendStatus(200);
});

module.exports = router;
