require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
 }).catch(console.log);


app.use( bodyParser.json() );
app.use( cors() );



app.get(`/api/dbtest`, (req, res) => {
    req.app
      .get('db')
     
      .then(response => {
        res.status(200).json(response);
      });
   });


const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );