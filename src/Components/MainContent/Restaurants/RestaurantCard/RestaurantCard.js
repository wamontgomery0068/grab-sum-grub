import React from 'react';


export default function RestaurantCard (props) {
    return(
        <div className = "Restaurants">

        <div className = "Restaurant_Container">

            <div className = "Restaurant_Card">

                <div className = "Page_Count">

                    {/* <p> {props.currentIndex +1 } of {props.totalIndex} </p> */}

                </div>

                <div className = "Name_Restaurant">

                    <p> {props.name} </p>

                </div>

                <div className = "Image_Restaurant"> 

                    <p> {props.image_url} </p>

                </div>

                <div className = "Details_Restaurant"></div>

            </div>

            <div className = "Button_Card">

                <div className = "Previous_Button">

                    <button onClick = { props.handlePreviousClick }> - </button>

                </div>

                <div className = "BeenHere_Button">

                    <p class = "Text_Button"> Been Here</p>

                </div>

                <div className = "Next_Button">

                    <button onClick = { props.handleNextClick }> + </button>

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