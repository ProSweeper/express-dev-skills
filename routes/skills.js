var express = require('express');
var router = express.Router();
// get the skills controller
var skillsCtrl = require('../controllers/skills');

// due to our app.set() in the server.js file all the routes start
// with /skills, we just need to append on to them
//Get /skills
router.get('/', skillsCtrl.index);
// GET /skills/new <-- define before the show route to avoid error
router.get('/new', skillsCtrl.new);
// GET skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
module.exports = router;
