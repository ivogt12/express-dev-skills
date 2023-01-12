const skills = [
    {id: 139334, skill: 'Making music', proficiency: 'Advanced'},
    {id: 142092, skill: 'Software Developer', proficiency: 'Beginner'},
    {id: 149730, skill: 'Communicator', proficiency: 'Intermediate'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.proficiency = 'beginner'
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}