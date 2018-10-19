const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
console.log('my connection', process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch( error => {
    console.error('Error connecting to database', error)
});

app.get( '/api/houses', controller.getHouses );
app.post( '/api/houses', controller.createHouse );
app.delete( '/api/houses/:id', controller.deleteHouse );

const port = 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${4000} 🔥`);
})