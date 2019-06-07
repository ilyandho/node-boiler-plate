const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')


//Middleware
app.use(morgan('dev'))
app.use(bodyParser({
    extended: true
}))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//Handle Routes
app.get('/', (req, res) => {
    res.send('hello World!')
})

module.exports = app