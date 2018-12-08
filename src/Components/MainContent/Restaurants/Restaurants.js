import React, { Component } from 'react';
import axios from 'axios';
// import RestaurantCard from './RestaurantCard/RestaurantCard';

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
                                <p> {element.name} </p>
                            </div>
                        </div>
                        <div className = "Button_Card">
                            <div className = "BeenHere_Button">
                                <button className = "Add_Button" onClick ={()=> this.addFavorite(element)}> Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className = "Restaurants">
                <div className = "RestaurantList_Container">
                    {DisplayRestaurant}
                </div>
                <div className = "List_Container"></div>
            </div>            
        )
    };
};

export default Restaurants;