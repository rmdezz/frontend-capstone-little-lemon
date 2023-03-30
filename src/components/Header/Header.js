import React from 'react';
import logo from '../../logo.png';
import Nav from '../Nav/Nav';
import "./Header.css";

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <img src={logo} alt="Little Lemon Logo"/>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;