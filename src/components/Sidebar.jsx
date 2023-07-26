
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="category-list">
                <li><a href="/">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/create-post">Create Post</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
            <ul className="category-list">
                <li><a href="#technology">Technology</a></li>
                <li><a href="#science">Science</a></li>
                <li><a href="#health">Health</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#lifestyle">Lifestyle</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
