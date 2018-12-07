import React, { Component } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard/RestaurantCard';

import './Restaurants.css';

class Restaurants extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: [],
            counter: 0
        };
    };

    componentDidMount(){
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then( results => {
            this.setState( { restaurants:results.data } )
        });
    }

    handlePreviousClick () {

        if (this.state.counter === 0) {
            this.setState ( { counter:0 } )
        }
        else {
            this.setState ( {counter: this.state.counter -1} )
        };
    };

    handleNextClick () {

        if (this.state.counter === this.state.restaurants) {
            this.setState ( { counter:0 } )
        }
        else {
            this.setState ( {counter: this.state.counter +1 } )
        };
    };

    render(){
        return(
            <RestaurantCard />
        )
    };
};

export default Restaurants;

// ---- REMINDER ----

// List Container
// All of the divs inside the container are temporary.
// Visual Reference.