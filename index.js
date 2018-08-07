const express = require('express');
const http = require('http')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const passport = require('passport')
const keys = require('./config/keys')
const dbURL = require('./helper/dbURL')
const api = require('./services/category.js')

mongoose.connect(dbURL(keys, 'mongodb'))

require('./models/User')
require('./services/passport');


const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
        httpOnly: true
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/appRoutes')(app)
// api.findCategories()
const port = process.env.PORT || 4000
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)