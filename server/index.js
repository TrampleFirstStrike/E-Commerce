require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
// const strategy = require(`${__dirname}/strategy.js`);
const request = require('request');
const Auth0Strategy = require('passport-auth0');
const config = require(`${__dirname}/config.js`);
const { domain, clientID, clientSecret } = config;
const configureStripe = require("stripe");


const stripe = configureStripe(process.env.sk_test_MT_SECRET_KEY);

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
 
 app.use( passport.initialize() );
 app.use( passport.session() );
 
 passport.use( new Auth0Strategy({
  domain,
  clientID,
  clientSecret,
  scope: 'openid profile email',
  callbackURL: '/Auth'
},
function(accessToken, refreshToken, extraParams, profile, done) {
  app
    .get("db")
    .getUserByAuthId(profile.user_id)
    .then(response => {
      console.log(profile, "profile")
      console.log(response, "response")
      if (!response[0]) {
        app
          .get("db")
          .createUserByAuthId(profile.user_id, profile._json.name)
          .then(created => done(null, created[0]));
      } else {
        return done(null, response[0]);
      }
  })
}
))
 
 passport.serializeUser( (user, done) => {
   
    done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
    done(null, obj );
  });
  
  app.use( checkForSession );

  app.post('/api/addToCart', (req, res) => {
    app.get("db").getProductByID(req.body.id).then(response => {
      console.log(response[0])
      req.session.user.cart.push(response[0])
      res.status(200).send(req.session.user.cart);
    })
    .catch(console.log)
    
  })
  app.get("/api/getCart", (req, res, next) => {
    console.log(req.session.user)
    res.status(200).json(req.session.user.cart)
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

   app.get("/api/me", (req, res) => {
    console.log(req);
    if (req.user) {
      res.status(200).json(req.user);
    } else {
      res.status(500).json({ message: "User is not logged in" });
    }
  });

  app.post("/api/payment", (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(req, res))
});

  const postStripeCharge = (req, res) => (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.log(stripeErr)
        res.status(500).send({ error: stripeErr })
    } else {
        res.status(200).send({ success: stripeRes })
    }
}

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );