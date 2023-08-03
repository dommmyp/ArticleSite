import PostPreview from './PostPreview'
import { useEffect, useState } from 'react'
const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        await fetch('http://localhost:3000/list-posts', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPosts(data.posts)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (
        <div className="post-list">
            <div className="post-header">
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
            </div>
            {posts && posts.map(post => (
                <PostPreview key={post._id} post={post} />
            ))
            }
        </div>
    );
};

export default PostList;
