const axios = require('axios');

// The information that I requested from the third party API is now stored
// in the restaurantData array below.

let restaurantData = [];

const getRestaurant = ( req, res, next ) => {
    axios.get("http://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=10")
    .then( results => {
        restaurantData = results.data
        res.status(200).send(restaurantData)
    }).catch(error => res.status(500).send(error))
}

const addRestaurant = ( req, res) => {
    let { name, image_url, address, city, state, postal_code, phone } = req.body;
    let newRestaurant = {
        id: restaurantData.length + 1,
        name,
        image_url,
        address,
        city,
        state,
        postal_code,
        phone        
    };
    restaurantData.push(newRestaurant);
    res.state(200).json(restaurantData);
};

// ----- Note -----
// module.exports is the Node way of exporting code to be used in another file.
// In this case, it is an object whose values are all functions.

module.exports = {
    getRestaurant,
    addRestaurant,
};

// Notes

// Elements
// name
// address
// city
// state
// postal_code
// phone
// image_url