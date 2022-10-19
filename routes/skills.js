var express = require('express');
var router = express.Router();
// get the skills controller
var skillsCtrl = require('../controllers/skills');

//Get requests
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
