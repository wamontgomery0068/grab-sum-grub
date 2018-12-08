import React, { Component } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard/RestaurantCard';

import './Restaurants.css';

class Restaurants extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: [],
            favorites: [],
        };

    };

    componentDidMount() {
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
        // console.log(results)    
        this.setState( { restaurants: response.data } )
        });
    }

    addFavorite() {
        axios.post('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
            console.log(results)
            this.setState( { favorites: response.data } )
        })
    }
    
    render(){
        return(
            <div className = "Flannel">
                <RestaurantCard />
            </div>            
        )
    };
};

export default Restaurants;

// ---- REMINDER ----

// List Container
// All of the divs inside the container are temporary.
// Visual Reference.