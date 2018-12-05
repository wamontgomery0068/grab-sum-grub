const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mc = require('./MainController');

const port = 3050;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );


// GET Request with Associate Endpoint
app.get('/api/grabsumgrub/restaurant', mc.getRestaurant)

app.listen(port, () => {console.log(`It's Magic!; ${port}`)
})

//  I am recieiving this error.......
// 'react-scripts' is not recognized as an internal or external command,
//  operable program or batch file.

// How I know it doesn't word?
// I copied my old noDB project server folder into this project and tried to run it and got the same error message.