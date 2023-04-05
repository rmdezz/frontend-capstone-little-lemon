import React from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" aria-label='Home'>Home</Link></li>
                <li><Link to="/about" aria-label='About'>About</Link></li>
                <li><Link to="/specials" aria-label='Menu'>Menu</Link></li>
                <li><Link to="/booking" aria-label='Reservations'>Reservations</Link></li>
                <li><Link to="/" aria-label='Order Online'>Order Online</Link></li>
                <li><Link to="/" aria-label='Login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;