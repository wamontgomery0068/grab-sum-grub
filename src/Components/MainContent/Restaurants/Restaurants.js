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
        this.deleteRestaurant = this.deleteRestaurant.bind(this);

    };

    componentDidMount() {
        axios.get('http://localhost:3002/api/grabsumgrub/restaurants').then ( response => {
        // console.log(response)    
        this.setState( { restaurants: response.data.restaurants } )
        });
    };

    addRestaurant(element) {
        axios.post('http://localhost:3002/api/grabsumgrub/restaurants', element).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        });
    };

    deleteRestaurant(id) {
        axios.delete(`http://localhost:3002/api/grabsumgrub/deleteRestaurant/${id}`).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        });
    };

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
                                <button className = "Add_Button" onClick={ () => this.addRestaurant(element)}> Add </button>
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
                        <div className = "List_Card">
                            <div className = "Name_Restaurant">
                                <h3> {element.name } </h3>
                            </div>
                            <img className = "List_Image" src={element.image_url}  alt={element.name}/>
                            <div className = "UserSection_Text">
                                <p> Restaurant Review </p>
                                <input type = "text" placeholder= "Add Comment"></input>
                                <button className = "Delete_Comment"> Delete </button>
                            </div>
                        </div>
                        <div className = "List_Button">
                            <button className = "Update_Button"> Update </button>
                            <button className = "Delete_Button" onClick={ () => this.deleteRestaurant(index.id)}> Delete </button>                            
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
                        <div className = "List_Card">
                            <div className = "Name_Restaurant">
                                <h3> FivePoints Pizza </h3>
                                <div className = "UserSection_Text">
                                    <p> Restaurant Review </p>
                                    <input type = "Text_Button" placeholder= "Add Comment"></input>
                                    <button className = "Delete_Comment"> Delete </button>
                                </div>
                            </div>

                        </div>
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