const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

// router.get('/', function(req, res) {
//     res.render('home');
// });

router.get('/', ctrl.animals.home);

// router.get("/about", function(req, res) {
//     res.render("about")
// })

router.get("/about", ctrl.animals.animals)

module.exports = router;