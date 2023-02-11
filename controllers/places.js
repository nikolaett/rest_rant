//dependencies
const router = require('express').Router()
const places = require('../models/places.js')

//GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//new places form
router.get('/new', (req, res) => {
    res.render('places/new')
})

//show new place
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        //Default image
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})

//show page
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id }) 
    }
})

//delete place
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        place.splice(id, 1)
        res.redirect('/places')
    }
})

//edit page
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit stub')
})

//show comment
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

//delete comment
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router