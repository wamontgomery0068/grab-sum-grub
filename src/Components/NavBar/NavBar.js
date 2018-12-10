import React from 'react';
import './NavBar.css'

export default function NavBar () {
    return(
        <div className = "NavBar_Container">
            <div className = "Login_Container" title= "I want some pizza!"></div>
            <div className = "Social_Container">
                <a className = "Social_Facebook" title= "Facebook" href="https://www.facebook.com/" />
                <a className = "Social_Twitter" title= "Twitter" href="https://twitter.com/?lang=en" />
                <a className = "Social_Instagram" title= "Instagram" href="https://www.instagram.com/?hl=en" />
                <a className = "Social_Youtube" title= "Youtube" href="https://www.youtube.com/" />
                <a className = "Social_Snapchat" title= "Snapchat" href="https://www.snapchat.com/" />
            </div>
        </div>
    )
};