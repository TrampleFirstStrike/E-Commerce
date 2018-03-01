require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const strategy = require(`${__dirname}/strategy.js`);
const request = require('request');

const checkForSession = require('./middlewares/checkForSession');

const app = express();

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
 }).catch(console.log);


 app.use( bodyParser.json() );
 app.use( cors() );
 app.use( session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: true
 }));
 
 app.use( checkForSession );
 app.use( passport.initialize() );
 app.use( passport.session() );
 
 passport.use( strategy );

 passport.serializeUser( (user, done) => {
  const { _json } = user;
  done(null, { clientID: _json.clientID, email: _json.email, name: _json.name, followers: _json.followers_url });
});

 passport.deserializeUser((obj, done) => {
  done(null, obj );
 });

 app.post('/api/addToCart', (req, res) => {
   console.log(req.user)

 })

 app.get(
   "/Auth",
   passport.authenticate("auth0", {
     successRedirect: "http://localhost:3000/Home",
     failureRedirect: "http://localhost:3001/Auth"
   })
 );


app.get('/login',
  passport.authenticate('auth0',
    {successRedirect: '/followers', failureRedirect: '/login', failureFlash: true, connection: 'github'}
  )
);

app.get('/followers', ( req, res, next ) => {
  if ( req.user ) {
    const FollowersRequest = {
      url: req.user.followers,
      headers: {
        'User-Agent': req.user.clientID
      }
    };

    request(FollowersRequest, ( error, response, body ) => {
      res.status(200).send(body);
    });
  } else {
    res.redirect('/login');
  }
});

app.get(`/api/dbtest`, (req, res) => {
    req.app
      .get('db')
     
      .then(response => {
        res.status(200).json(response);
      });
   });

   app.get('/api/products', (req, res) => {
     console.log("hit");
     req.app
     .get('db')
     .getProducts()
     .then(response => {res.status(200).json(response)
    });
   });

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );