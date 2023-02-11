//dependencies
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//express settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers and Routes
//places page
app.use('/places', require('./controllers/places'))

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//error page
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)