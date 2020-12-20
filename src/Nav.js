import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav() {
    return (
        <nav>
            <h3>Hexagon</h3>
            <ul className="nav-links">
                <Link to="/home">
                <li>Home</li>
                </Link>
                <Link to="/stuff">
                <li>Stuff</li>
                </Link>
                <Link to="imgslider">
                <li>IMG slider</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;