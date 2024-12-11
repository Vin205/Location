const express = require('express');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport');

// Auth callback route from Auth0 to create or find user in DB.
router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/' }), async (req, res) => {
    const { sub } = req.user; // Get auth0 user id from request body

    let user = await User.findOne({ auth0Id: sub });
    
    if (!user) {
        user = new User({ auth0Id: sub });
        await user.save();
    }

    req.session.userId = user._id; // Store user ID in session

    res.redirect('/'); // Redirect to homepage or desired route after login
});

// Logout route to clear session.
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;