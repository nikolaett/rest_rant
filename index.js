//Dependencies
const express = require('express');
const app = express();

//Homepage
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(3000)