import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import Post from './components/Post'; // Import the Post component for individual post pages
import Footer from './components/Footer';
import SidebarMini from './components/SidebarMini';
import CreatePost from './components/CreatePost'
import TextField from './components/TextField'
import './styles.css';

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    // Sample data for posts (replace this with actual data fetched from API or database)
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            content: 'CContent for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1Content for post 1ontent for post 1',
            user: 'John Doe',
            userID: '255635242',
            topics: ['Math', 'Science'],
            summary: 'Summary for post 3Summary for post 3Summary for post 3Summary for post 3Summary for post 3Summary for post 3Summary for post 3Summary for post 3Summary for post 3',
            date: 'Jan 5, 2023',
        },
        {
            userID: '255635242',
            topics: ['Math', 'Science'],
            summary: 'Summary for post 3',
            date: 'Jan 5, 2023',
            id: 2,
            title: 'Post 2',
            content: 'Content for post 2',
            user: 'Jane Smith'
        },
        {
            id: 3,
            title: 'Post 3',
            content: 'Content for post 3',
            userID: '255635242',
            user: 'James Brown',
            topics: ['Math', 'Science'],
            summary: 'Summary for post 3',
            date: 'Jan 5, 2023'
        },
        // Add more posts here
    ];


    return (
        <Router>
            <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
            <div className="app">
                {showSidebar ?
                    <Sidebar /> :
                    <SidebarMini />
                }
                <Routes>
                    <Route path="/" element={<PostList posts={posts} />} />
                    <Route path="/post/:id" element={<Post posts={posts} />} />
                    <Route path="/create-post" element={<TextField />} />

                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
