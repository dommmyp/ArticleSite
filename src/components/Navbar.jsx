import React from 'react';
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai'
const Navbar = (props) => {



    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><GiHamburgerMenu onClick={props.toggleSidebar} /></li>
                <li>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <div className="svgWrapper">
                            <AiOutlineSearch />
                        </div>
                    </div>
                </li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
