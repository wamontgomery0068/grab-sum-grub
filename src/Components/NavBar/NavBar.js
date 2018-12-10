import React from 'react';
import './NavBar.css'

export default function NavBar () {
    return(
        <div className = "NavBar_Container">
            <div className = "Login_Container" title= "I want some pizza!">
                {/* <p className = "Nav_Text"> User Login Section </p> */}
            </div>
            <div className = "Social_Container">
                <div className = "Social_Facebook" title= "Facebook" ></div>
                <div className = "Social_Twitter" title= "Twitter" ></div>
                <div className = "Social_Instagram" title= "Instagram" ></div>
                <div className = "Social_Youtube" title= "Youtube" ></div>
                <div className = "Social_Snapchat" title= "Snapchat" ></div>
            </div>
        </div>
    )
};