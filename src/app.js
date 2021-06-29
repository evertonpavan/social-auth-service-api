require('dotenv').config()

const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

const passport = require('passport')
require('./app/config/passport')(passport)

const app = express();

app.use(express.json());

app.set('views', path.join(__dirname, '/app/views/pages'));
app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(cors());

app.use('/api/v1', routes);


module.exports = app; 