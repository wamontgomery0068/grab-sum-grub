const axios = require('axios');

let restaurantData = [];

getRestaurants = ( req, res, next ) => {
    axios.get("http://opentable.herokuapp.com/api/restaurants?city=Nashville")
    .then( results => {
        restaurantData = results.data
        res.status(200).send(restaurantData)
    }).catch(error => res.status(500).send(error))
}

// ----- Note -----
// module.exports is the Node way of exporting code to be used in another file.
// In this case, it is an object whose values are all functions.

module.exports = {
    getRestaurants,
};
