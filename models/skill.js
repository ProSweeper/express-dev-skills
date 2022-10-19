const skills = [
    {id: 10, skill: 'HTML', proficientcy: '⭐⭐⭐⭐'},
    {id: 20, skill: 'CSS', proficientcy: '⭐⭐⭐'},
    {id: 30, skill: 'JavaScript', proficientcy: '⭐⭐⭐⭐'},
    {id: 40, skill: 'Express.js', proficientcy: '⭐⭐'},
    {id: 50, skill: 'Node.js', proficientcy: '⭐⭐'},
];

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    // return all the skills
    return skills;
}

function getOne(id) {
    // return the skill that gets clicked
    // make the id into a number
    id = parseInt(id);
    // find the skill where to id matches the clicked anchor tag
    return skills.find(skill => skill.id === id);
}