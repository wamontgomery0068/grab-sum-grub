import React from 'react';


export default function RestaurantCard (props) {
    return(
        <div className = "Restaurants">

        <div className = "Restaurant_Container">

            <div className = "Restaurant_Card">

                <div className = "Name_Restaurant">

                    <p> {props.name} </p>

                </div>

                <div className = "Image_Restaurant"> 

                    {props.image_url}

                </div>

                <div className = "Details_Restaurant"></div>

            </div>

            <div className = "Button_Card">

                <div className = "BeenHere_Button">

                    <button className = "Add_Button"> Add </button>

                </div>

            </div>

        </div>

        <div className = "List_Container">

            <div className = "Restaurant_Container">

                <div className = "Restaurant_Card">
                    <div className = "Name_Restaurant"></div>
                    <div className = "Image_Restaurant"></div>
                    <div className = "User_Section">
                        <p> Restaurant Review </p>
                        <input type = "text" placeholder = "Add Comment"></input>
                        <button className = "Delete_Comment"> Delete </button>
                    </div>
                </div>

                <div className = "Button_Card">
                    <button className = "Update_Button"> Update </button>
                    <button className = "Delete_Button"> Delete </button>
                </div>

            </div>

        </div>

    </div>

    )
};