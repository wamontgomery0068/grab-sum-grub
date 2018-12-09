import React, { Component } from 'react';
import axios from 'axios';

import './Restaurants.css';

class Restaurants extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: [],
            favorites: [],
        };

        this.addRestaurant = this.addRestaurant.bind(this);
        this.removeRestaurant = this.removeRestaurant.bind(this);

    };

    // Works

    componentDidMount() {
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
        // console.log(response)    
        this.setState( { restaurants: response.data } )
        });
    };

    // Works

    addRestaurant(id) {
        // console.log(id)
        axios.post('http://localhost:3002/api/grabsumgrub/restaurants', id).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        });
    };

    removeRestaurant(id) {
        console.log(id)
        axios.delete(`http://localhost:3002/api/grabsumgrub/restaurants/${id}`).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        });
    };

    render(){

        let DisplayRestaurant = this.state.restaurants.map( (element, index) => {
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
                                <button className = "Add_Button" onClick={ () => this.addRestaurant(element)}> Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        let DisplayFavorite = this.state.favorites.map ( (element, index) => {
            return (
                <div key = {index.id}>
                    <div className = "FavoriteList_Container">
                        <div className = "List_Card">
                            <div className = "Name_Restaurant">
                                <h3> { element.name} </h3>
                            </div>
                            <img className = "List_Image" src={element.image_url}  alt={element.name}/>
                            <div className = "List_Details">
                                <p className = "List_Text"> Address: {element.address} </p>
                                <p className = "List_Text"> City: {element.city} </p>
                                <p className = "List_Text"> State: {element.state} </p>
                                <p className = "List_Text"> Area Code: {element.postal_code} </p>
                                <p className = "List_Text"> Phone Number: {element.phone} </p>
                                <p className = "List_Text"> Customer Review: {element.review} </p>
                            </div>
                            <div className = "UserSection_Text">
                                <input type = "text" placeholder= "Add a Review"></input>
                                <button className = "Delete_Comment"> Delete </button>
                            </div>
                        </div>
                        <div className = "List_Button">
                            <button className = "Update_Button"> Update </button>
                            <button className = "Delete_Button" onClick={ () => this.removeRestaurant(element.id)}> Delete </button>                            
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
                    { DisplayFavorite }
                    </div>
                </div>
            </div>           
        )
    };
};

export default Restaurants;