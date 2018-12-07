import React, { Component } from 'react';
import Title from './Title/Title';
import './Header.css'

class Header extends Component{
    render() {
        const title = "Grab Sum Grub"
        return (
            <div className = "Header_Container">
                <div className = "Title_Container">
                    <Title title={title} />
                </div>
            </div>
        )
    }
};

export default Header;