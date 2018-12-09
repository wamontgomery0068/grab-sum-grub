const axios = require('axios');

// The information that I requested from the third party API is now stored
// in the restaurantData array below.

let restaurantData = [];
let favorites = [];


// ******** Full CRUD ********

// ***** Functioning Properly *****

const getRestaurant = ( req, res, next ) => {
    axios.get("http://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=10")
    .then( response => {
        restaurantData = response.data.restaurants.map( element => {
            if (element.city === "Nashville") {
                element.review =
                    "enter comment"
            };
            return element;
        });
        res.status(200).send(restaurantData)
    }).catch(err => res.status(500).send(err))
};


// ***** Functioning Properly *****


const addRestaurant = (req, res) => {
    // console.log(res)
    favorites.push(req.body);
    res.status(200).send(favorites);
};


// ***** Functioning Properly *****


const deleteRestaurant = (req, res) => {
    // console.log(req.params.id)
    deleteId = req.params.id;
    let index = favorites.findIndex( eat => eat.id == deleteId);
    favorites.splice(index, 1);
    res.status(200).json(favorites);
};


// ***** Functioning Properly *****

const updateReview = (req, res, next) => {
    // console.log(req.params.id, req.body.review)
    const { review } = req.body;
    const editID = req.params.id;
    const editIndex = favorites.findIndex(eat => eat.id == editID);
    let shop = favorites[editIndex];
    favorites[editIndex] = {
        name: shop.name,
        image_url: shop.image_url,
        address: shop.address,
        city: shop.city,
        state: shop.state,
        postal_code: shop.postal_code,
        phone: shop.phone,
        review: review || shop.review,
    };
    return res.status(200).json(favorites);
};

// const updateReview = (req, res) => {
//     // console.log(req.body);
//     favorites.forEach(eat.id == req.params.id && Object.assign(eat,req.body))
//     console.log(favorites)
//     return res.status(200).json(favorites);
// };

// ----- Note -----
// module.exports is the Node way of exporting code to be used in another file.
// In this case, it is an object whose values are all functions.

module.exports = {
    getRestaurant,
    addRestaurant,
    deleteRestaurant,
    updateReview,
};