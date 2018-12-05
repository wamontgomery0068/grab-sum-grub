const axios = require('axios');
const config = { headers: {'user-key': '497757ae741a4e8fddd03e095e3b7bc6'}}

let restaurantData = [];


function getRestaurant ( req, res, next ) {
    axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=20&collection_id=428", config).then( response => {
        restaurantData = response.data
        res.status(200).send(restaurantData)
    }).catch(error => res.status(500).send(error))
};

module.exports = {
    getRestaurant,
};

//  I am recieiving this error.......
// 'react-scripts' is not recognized as an internal or external command,
//  operable program or batch file.

// How I know it doesn't word?
// I copied my old noDB project server folder into this project and tried to run it and got the same error message.