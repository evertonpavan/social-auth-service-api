const express = require('express');
const passport = require('passport')
const authenticateRoutes = express.Router();


const { ensureAuth, ensureGuest } = require('../app/middleware/auth')

authenticateRoutes.get('/', ensureGuest ,(req, res) => {
    res.render('auth')
  })

authenticateRoutes.get("/profile",ensureAuth, async(req,res)=>{
    res.render('index', { user: req.user })
})

authenticateRoutes.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/api/v1/auth')
  })

authenticateRoutes.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

authenticateRoutes.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/api/v1/auth' }),
    (req, res) => {
        res.redirect('/api/v1/auth/profile')
    }
);

module.exports = authenticateRoutes