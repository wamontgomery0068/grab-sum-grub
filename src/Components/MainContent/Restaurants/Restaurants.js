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
            <div className = "Restaurants">
                <div className = "Restaurant_Container">
                    <div className = "Restaurant_Card">
                        <div className = "Page_Count"> Page Count </div>
                        <div className = "Name_Restaurant"> Name </div>
                        <div className = "Image_Restaurant"> Image </div>
                        <div className = "Details_Restaurant"> Details</div>
                    </div>
                    <div className = "Button_Card">
                        <div className = "Previous_Button">
                            <p class = "Text_Button"> - </p>
                        </div>
                        <div className = "BeenHere_Button">
                            <p class = "Text_Button"> Been Here</p>
                        </div>
                        <div className = "Next_Button">
                            <p class = "Text_Button"> + </p>
                        </div>
                    </div>
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