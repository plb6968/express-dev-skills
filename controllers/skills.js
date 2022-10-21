const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'NewSkill' }); 
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill details'
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All of My Skills'
    });
}