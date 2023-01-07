//dependencies
const router = require('express').Router()

//places route
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router