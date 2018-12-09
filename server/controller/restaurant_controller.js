const axios = require('axios');

// The information that I requested from the third party API is now stored
// in the restaurantData array below.

let restaurantData = [];
let favorites = [];

// const getRestaurant = ( req, res ) => {
//     axios.get("http://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=10")
//     .then( results => {
//         restaurantData = results.data.restaurants
//         res.status(200).send(restaurantData)    
//     }).catch(error => res.status(500).send(error))
// }

const getRestaurant = ( req, res, next ) => {
    axios.get("http://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=10")
    .then( response => {
        restaurantData = response.data.restaurants.map( element => {
            if (element.city === "Nashville") {
                element.review =
                    "user comments here"
            };
            return element;
        });
        res.status(200).send(restaurantData)
    }).catch(err => res.status(500).send(err))
};


const addRestaurant = (req, res) => {
    console.log(res)
    favorites.push(req.body);
    res.status(200).send(favorites);
};

const deleteRestaurant = ( req, res ) => {
    let deleteID = req.params.id;
    const restaurantIndex = favorites.findIndex(rest => rest.id === +deleteID);
    favorites.splice(restaurantIndex,1);
    res.status(200).json(favorites);
};

// ----- Note -----
// module.exports is the Node way of exporting code to be used in another file.
// In this case, it is an object whose values are all functions.

module.exports = {
    getRestaurant,
    addRestaurant,
    deleteRestaurant,
};

// Notes
