const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rc = require('./controller/restaurant_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

const port = 3002;


// Get Request with Associated Endpoint

app.get( '/api/grabsumgrub/restaurants', rc.getRestaurants);

// Post Request with Associated Endpoint
// You need to create a mc.something. When finished delete comment.
// app.post( grabSumGrub, mc);

// ----- Note -----
// For the put and delete endpoints, we need to add on a url parameter of id.
// A url paramter can be defined by adding :variableName when making the URL for an endpoint.

// ----- Note -----
// Look at the difference between put,delete and post,get

// Put Request with Associated Endpoint
// You need to create a mc.something. When finished delete comment.
// Reference: node-1-afternoon project
// app.put( `${grabSumGrub}/:id`, mc);

// Delete Request with Associated Endpoint
// You need to create a mc.something. When finished delete comment.
// app.delete( `${grabSumGrub}/:id`, mc);


app.listen(port, () => {console.log(`It's Magic!; ${port}`)
});