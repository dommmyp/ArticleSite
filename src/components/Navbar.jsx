import React from 'react';
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = (props) => {



    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><GiHamburgerMenu onClick={props.toggleSidebar} /></li>
                <li><a href="/">Home</a></li>
                <li>Search</li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/create-post">Create Post</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
