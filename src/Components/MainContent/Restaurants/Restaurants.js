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

        this.addFavorite = this.addFavorite.bind(this);

    };

    componentDidMount() {
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
        console.log(response)    
        this.setState( { restaurants: response.data.restaurants } )
        });
    }

    addFavorite(element) {
        axios.post('http://localhost:3002/api/grabsumgrub/restaurants', element).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        })
    }
    
    render(){
        console.log( this.state.restaurants)
        let DisplayRestaurant = this.state.restaurants.map ( (element, index) => {
            return (
                <div key = {index.id}>
                    <div className = "Restaurant_Container">
                        <div className = "Restaurant_Card">
                            <div className = "Name_Restaurant">
                                <h3> {element.name} </h3>
                            </div>
                            <div className = "Image_Restaurant">
                                {element.image_url}
                            </div>
                            <div className = "Details_Restaurant">
                                <p className = "Text_Details"> Address: {element.address} </p>
                                <p className = "Text_Details"> City: {element.city} </p>
                                <p className = "Text_Details"> State: {element.state} </p>
                                <p className = "Text_Details"> Area Code: {element.postal_code} </p>
                                <p className = "Text_Details"> Phone Number: {element.phone} </p>
                            </div>
                        </div>
                        <div className = "Button_Card">
                            <div className = "BeenHere_Button">
                                <button className = "Add_Button" onClick = { () => this.addFavorite(element)}> Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        // let DisplayFavorite = this
        return(
            <div className = "Flannel">
                {/* {DisplayRestaurant} */}
                <RestaurantCard
                
                />
            </div>            
        )
    };
};

export default Restaurants;

// ---- REMINDER ----

// List Container
// All of the divs inside the container are temporary.
// Visual Reference.