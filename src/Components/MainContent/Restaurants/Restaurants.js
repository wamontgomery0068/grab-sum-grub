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
            <div className = "Restaurants">
                <div className = "Restaurant_Container">
                    <div className = "Restaurant_Card"></div>
                    <div className = "Button_Card"></div>
                </div>
                <div className = "List_Container">
                    <div className = "Restaurant_Container">
                        <div className = "Restaurant_Card"></div>
                        <div className = "Button_Card"></div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Restaurants;

// ---- REMINDER ----

// List Container
// All of the divs inside the container are temporary.
// Visual Reference.