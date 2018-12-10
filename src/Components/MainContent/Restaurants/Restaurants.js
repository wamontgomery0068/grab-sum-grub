import React, { Component } from 'react';
import axios from 'axios';
// import Favorites from '../Favorites/Favorites';

import './Restaurants.css';


class Restaurants extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: [],
            favorites: [],
            userInput: '',
        };

        this.addRestaurant = this.addRestaurant.bind(this);
        this.removeRestaurant = this.removeRestaurant.bind(this);
        this.updateReview = this.updateReview.bind(this);

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

    // Works

    removeRestaurant(id) {
        // console.log(id)
        axios.delete(`http://localhost:3002/api/grabsumgrub/restaurants/${id}`).then ( response => {
            // console.log(response)
            this.setState( { favorites: response.data } )
        });
    };

    // ***** User Review Section *****

    updateReview(id,review) {
        // console.log(id)
        axios.put(`http://localhost:3002/api/grabsumgrub/restaurants/${id}`, {review}).then ( response => {
            this.setState( { favorites: response.data, userInput: ""} );
        })
    };

    
    
    render(){
        // console.log(this.state.favorites)

        let DisplayRestaurant = this.state.restaurants.map( (element, index) => {
            return (
                <div key = {index.id}>
                    <div className = "Restaurant_Container">
                        <div className = "Restaurant_Card">
                            <div className = "Restaurant_Name">
                                <p> {element.name} </p>
                            </div>
                            <img className = "Restaurant_Image" src={element.image_url}  alt={element.name}/>
                            <div className = "Restaurant_Details">
                                <p className = "Restaurant_Text"> {element.address} </p>
                                <p className = "Restaurant_Text"> {element.city} </p>
                                <p className = "Restaurant_Text"> {element.state} </p>
                            </div>
                        </div>
                        <div className = "Restaurant_Button_Card">
                            <div className = "BeenHere_Button">
                                <button className = "Add_Button" onClick={ () => this.addRestaurant(element)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        let DisplayFavorite = this.state.favorites.map ( (element, index) => {
            return (
                <div key = {index.id}>
                    <div className = "List_Favorite_Card">
                        <div className = "List_Card">
                            <div className = "Restaurant_Name">
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
                            <div className = "List_UserSection_Text">
                                <input 
                                    type = "text" 
                                    placeholder= "Add a Review" 
                                    onChange={e => this.setState({ userInput: e.target.value })}/>
                                <button 
                                    className = "List_Delete_Comment"
                                    > Delete </button>
                            </div>
                        </div>
                        <div className = "List_Button_Card">
                            <button 
                                className = "List_Update_Button" 
                                onClick={() => this.updateReview(element.id, this.state.userInput)}></button>
                            <button 
                                className = "List_Delete_Button" 
                                onClick={ () => this.removeRestaurant(element.id)}></button>                            
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className = "Restaurants">
                <div className = "Restaurant_List_Container">
                    {DisplayRestaurant}
                </div>
                <div className = "List_Container">
                    <div className = "FavoriteList_Container">
                        { DisplayFavorite }
                        {/* <Favorites 
                            name={this.state.favorites.name}
                            image={this.state.favorites.image_url}
                            address={this.state.favorites.address}
                            city={this.state.favorites.city}
                            state={this.state.favorites.state}
                            code={this.state.favorites.postal_code}
                            phone={this.state.favorites.phone}
                            review={this.state.favorites.review}
                            update={this.updateReview}
                            delete={this.removeRestaurant}
                        /> */}
                    </div>
                </div>
            </div>           
        )
    };
};

export default Restaurants;