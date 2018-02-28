 const Auth0Strategy = require('passport-auth0');
 const config = require(`${__dirname}/config.js`);
 const { domain, clientID, clientSecret } = config;

 module.exports = new Auth0Strategy({
     domain,
     clientID,
     clientSecret,
     scope: 'openid profile email',
     callbackURL: '/Auth'
 },
 function(accessToken, refreshToken, extraParams, profile, done) {
     return done(null, profile);
 }
);