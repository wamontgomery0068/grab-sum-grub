const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rc = require('./controller/restaurant_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

const port = 3002;


// ***** Get Request with Associated Endpoint *****

app.get( '/api/grabsumgrub/restaurants', rc.getRestaurant);

// ***** Post Request with Associated Endpoint *****

app.post( '/api/grabsumgrub/restaurants', rc.addRestaurant);

// ----- Note -----
// For the put and delete endpoints, we need to add on a url parameter of id.
// A url paramter can be defined by adding :variableName when making the URL for an endpoint.

// ----- Note -----
// Look at the difference between put,delete and post,get

// ***** Delete Request with Associated Endpoint *****

app.delete( '/api/grabsumgrub/deleteRestaurant:id', rc.deleteRestaurant);


// ***** Put Request with Associated Endpoint *****

// app.put( '/api/grabsumgrub/restaurants/:id', rc.updateReview);




app.listen(port, () => {console.log(`Cowabunga!; ${port}`)
});