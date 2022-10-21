var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/todos"

// GET /skills/index
router.get('/', skillsCtrl.index);
// Get /skills/newSkill
router.get('/new', skillsCtrl.newSkill);

router.get('/:id', skillsCtrl.show);
// Post '/skills' 
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.deleteSkill);

module.exports = router;
