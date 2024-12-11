// server/config/passport.js
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

module.exports = function(passport) {
    passport.use(new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: '/api/auth/callback',
        scope: 'openid profile email'
    },
    async (accessToken, refreshToken, extraParams, profile, done) => {
        return done(null, profile);
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};