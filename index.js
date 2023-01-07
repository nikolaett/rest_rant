//dependencies
require('dotenv').config()
const express = require('express')
const app = express()

//homepage
app.get('/', (req, res) => {
    res.send('Home Page')
})

//places page
app.use('/places', require('./controllers/places'))


//error page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)