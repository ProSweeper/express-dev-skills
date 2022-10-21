const skills = [
    {id: 102345, skill: 'HTML', proficientcy: '⭐⭐⭐⭐'},
    {id: 203453, skill: 'CSS', proficientcy: '⭐⭐⭐'},
    {id: 302435, skill: 'JavaScript', proficientcy: '⭐⭐⭐⭐'},
    {id: 402342, skill: 'Express.js', proficientcy: '⭐⭐'},
    {id: 505423, skill: 'Node.js', proficientcy: '⭐⭐'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
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

function create(skill) {
    // give a 6 digit id
    skill.id = Date.now() % 1000000;
    // for this example we need to chage the number to stars
    skill.proficientcy = '⭐'.repeat(skill.proficientcy);
    // push the skill to the array
    skills.push(skill);
}

function deleteOne(id) {
    // need the id since we are accessing a single skill
    // it also needs to be converted from a string to an int
    id = parseInt(id);
    // find the index of data entry with the matching ID so we can access
    // it and remove it from the array
    const idx = skills.findIndex(skill => skill.id === id);
    // now that we have the index the best method to remove a specific
    // element from an array is the splice method
    // first arg is the index we want to start at
    // second arg is the amount of items we want to delete
    skills.splice(idx, 1);    
}