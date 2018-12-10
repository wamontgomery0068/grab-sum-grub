import React from 'react';

 const Favorites = (props) => {
    console.log(props)
    return(
        <div className = "FavoriteList_Container">
            <div className = "List_Card">
                <div className = "Restaurant_Name">
                    <h3> {props.name} </h3>
                </div>
                <img className = "List_Image" src={props.image_url}  alt={props.name}/>
                <div className = "List_Details">
                    <p className = "List_Text"> Address: {props.address} </p>
                    <p className = "List_Text"> City: {props.city} </p>
                    <p className = "List_Text"> State: {props.state} </p>
                    <p className = "List_Text"> Area Code: {props.postal_code} </p>
                    <p className = "List_Text"> Phone Number: {props.phone} </p>
                    <p className = "List_Text"> Customer Review: {props.review} </p>
                </div>
                <div className = "List_UserSection_Text">
                    <input 
                        type = "text" 
                        placeholder= "Add a Review" 
                        onChange={e => props.updateReview({ userInput: e.target.value })}/>
                    <button 
                        className = "List_Delete_Comment"
                        > Delete </button>
                </div>
            </div>
            <div className = "List_Button">
                <button className = "List_Update_Button"onClick={() => props.updateReview(props.id)}> Update </button>
                <button className = "List_Delete_Button"onClick={() => props.removeRestaurant(props.id)}> Delete </button>
            </div>
        </div>
    )
};

export default Favorites;