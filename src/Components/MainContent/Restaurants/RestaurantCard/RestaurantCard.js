import React from 'react';


export default function RestaurantCard (props) {
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
}