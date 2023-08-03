import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState(null)
    const { id } = useParams();
    const postId = parseInt(id);
    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {

        await fetch(`http://localhost:3000/post`, {
            method: 'post',
            body: JSON.stringify({
                id: id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPost(data.post)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>
            {post &&
                <div className="post">
                    <div>
                        <div>{post.user}</div>
                        <div>{post.date}</div>
                    </div>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            }
        </>
    );
};

export default Post;
