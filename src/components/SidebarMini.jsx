import React from 'react';
import './Sidebar.css'
import { MdExplore, MdHomeFilled, MdCreate } from 'react-icons/md'

const SidebarMini = () => {
    return (
        <aside className="sidebar sidebar-mini">
            <ul className="category-list">
                <li>
                    <a href="/">
                        <div className="svgWrapper">
                            <MdHomeFilled />
                        </div>
                        <div>Home</div>
                    </a>
                </li>
                <li>
                    <a href="/explore">
                        <div className="svgWrapper">
                            <MdExplore />
                        </div>
                        <div>Explore</div>
                    </a>
                </li>
                <li>
                    <a href="/create-post">
                        <div className="svgWrapper">
                            <MdCreate />
                        </div>
                        <div>Create Post</div>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarMini;
