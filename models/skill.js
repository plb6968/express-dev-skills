const skills = [
    {id: 123456, skill: 'CSS', aquired: true},
    {id: 234567, skill: 'HTML', aquired: true},
    {id: 345678, skill: 'javaScript', aquired: true},
    {id: 456789, skill: 'Express', aquired: false}
];

module.exports = {
    getOne,
    getAll,
    create,
    deleteOne
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
    console.log(skills);
}

function create(skill) {
    skill.id = Date.now() % 1000000;  
    skill.aquired = false; 
    skills.push(skill); 
    console.log(skills);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}