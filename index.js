//Dependencies
require('dotenv').config()
const express = require('express')
const app = express()

//Homepage
app.get('/', (req, res) => {
    res.send('Home Page')
})

//Error Page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)