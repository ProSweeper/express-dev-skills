var express = require('express');
var router = express.Router();
// get the skills controller
var skillsCtrl = require('../controllers/skills');

//Get requests
router.get('/', skillsCtrl.index);
// GET /skills/new <-- define before the show route to avoid error
router.get('/new', skillsCtrl.new);
// GET skills/:id
router.get('/:id', skillsCtrl.show);


module.exports = router;
