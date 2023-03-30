import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/menu'>Menu</a></li>
                <li><a href='/reserve'>Reservations </a></li>
                <li><a href='/contact'>Order online</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;