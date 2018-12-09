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

        this.addRestaurant = this.addRestaurant.bind(this);

    };

    componentDidMount() {
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
        // console.log(response)    
        this.setState( { restaurants: response.data.restaurants } )
        });
    }

    addRestaurant(element) {
        axios.post('http://localhost:3002/api/grabsumgrub/restaurants', element).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        })
    }

    deleteRestaurant(index) {
        axios.delete(`http://localhost:3002/api/grabsumgrub/deleteRestaurant/${index}`).then(response => {
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
                            <img className = "Image_Restaurant" src={element.image_url}  alt={element.name}/>
                            <div className = "Details_Restaurant">
                                <p className = "Text_Details"> {element.address} </p>
                                <p className = "Text_Details"> {element.city} </p>
                                <p className = "Text_Details"> {element.state} </p>
                            </div>
                        </div>
                        <div className = "Button_Card">
                            <div className = "BeenHere_Button">
                                <button className = "Add_Button" onClick ={this.addRestaurant}> Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        let DisplayFavorite = this.state.restaurants.map ( (element, index) => {
            return (
                <div key = {index.id}>
                    <div className = "FavoriteList_Container">
                        <div className = "List_Card"></div>
                        <div className = "List_Button">
                            <button className = "Update_Button"> Update </button>
                            <button className = "Delete_Button"> Delete </button>                            
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
                <div className = "List_Container">
                    <div className = "FavoriteList_Container">
                        <div className = "List_Card"></div>
                        <div className = "List_Button">
                            <button className = "Update_Button"> Update </button>
                            <button className = "Delete_Button"> Delete </button>
                        </div>
                    </div>
                </div>
            </div>           
        )
    };
};

export default Restaurants;