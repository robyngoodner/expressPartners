const db = require('../models')

const animals = (req, res) => {
    res.render("about", {
        animals: db.animals.animals
    })
}

const home = (req, res) => {
    res.render("home")
}

module.exports = {
    animals,
    home
}