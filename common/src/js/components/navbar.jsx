import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar fixed-top black'>
                <div className="nav-wrapper">
                    <ul className="right hide-onmed-and-down" id='nav-mobile'>
                        <li><a href="#">Login/Sign-Up</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}