const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

// respond to request asking for the whole data set
function index(req, res) {
    // for our render functions we configured the app to start in the views folder
    // thats why we dont pass that into the path param
    res.render('skills/index', {
        // the render function has 2 params the path and an object
        // the value of the object we want to render is recieved from our model
        // function we imported into this module
        skills: Skill.getAll(),
        title: 'All Skills',
    });
}

// respond to request asking for a single entry
function show(req, res) {
    // remember we are rendering the view ejs file with this function
    // never use leading slashes when rendering
    res.render('skills/show', {
        // the request object has a parameters property which we can get the id from
        // we call this one skill because we are only retunring a singular entry
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details',
    });
}

function newSkill(req, res) {
    res.render('skills/new',{
        title: 'New Skill',
    });
}

function create(req, res) {
    // get the skill object we imported from the model 
    // our info will be in the req.body of the post request send
    // from the form
    Skill.create(req.body);
    // always do a redirect when changing data
    // remeber the / infront of the path, all redirects need it
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    // use the imported skill object to delete the entry from the model
    // the req.params.id correlates to the route param in the routes
    // module - router.delete('/:id', skillsCtrl.delete)
    Skill.deleteOne(req.params.id);
    // we changed data so a redirect is needed, remember the leading /
    res.redirect('/skills');
}