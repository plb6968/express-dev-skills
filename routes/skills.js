var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/todos"

// GET /skills/index
router.get('/', skillsCtrl.index);
// Get /skills/newSkill
router.get('/new', skillsCtrl.newSkill);
// Post '/skills' 
router.post('/', skillsCtrl.create);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
