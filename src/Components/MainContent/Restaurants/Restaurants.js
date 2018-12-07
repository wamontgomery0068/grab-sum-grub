import React, { Component } from 'react';
import axios from 'axios';

import './Restaurants.css';

class Restaurants extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: [],
        };
    };

    componentDidMount(){
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then( results => {
            this.setState( { restaurants:results.data } )
        });
    }

    render(){
        return(
            <div className = "Restaurants"></div>
        )
    };
};

export default Restaurants;