//dependencies
const router = require('express').Router()

//GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-curry.jpg'
        //Photo by <a href="https://unsplash.com/@grimnoire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">emy</a> on <a href="https://unsplash.com/photos/XoByiBymX20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpg'
        //Photo by <a href="https://unsplash.com/it/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Reba Spike</a> on <a href="https://unsplash.com/photos/xxIyFBpcDuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }, {
        name: 'SweeTart Bakery',
        city: 'New York City',
        state: 'NY',
        cuisines: 'Tarts, Bakery',
        pic: '/images/blackberry-tart.jpg'
        //Photo by <a href="https://unsplash.com/@kimbroughdaniels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kim Daniels</a> on <a href="https://unsplash.com/photos/OrkEasJeY74?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }]
    res.render('places/index', { places })
})

module.exports = router