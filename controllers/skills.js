const Skill = require('../models/skill');

module.exports = {
    index,
    show,
}

// respond to request asking for the whole data set
function index(req, res) {
    // for our render functions we configured the app to start in the views folder
    // thats why we dont pass that into the path param
    res.render('skills/index', {
        // the render function has 2 params the path and an object
        // the value of the object we want to render is recieved from our model
        // function we imported into this module
        skills: Skill.getAll()
    });
}

// respond to request asking for a single entry
function show(req, res) {
    // remember we are rendering the view ejs file with this function
    // never use leading slashes when rendering
    res.render('skills/show', {
        // the request object has a parameters property which we can get the id from
        // we call this one skill because we are only retunring a singular entry
        skill: Skill.getOne(req.params.id)
    });
}