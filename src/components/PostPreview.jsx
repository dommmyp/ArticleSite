
import React from 'react';
import { useParams } from 'react-router-dom';

const PostPreview = ({ post }) => {

    if (!post) {
        return <div>Post not found!</div>;
    }

    const { title, user, topics, summary, date } = post;

    return (
        <div className="post">
            <div>
                <div>{user}</div>
                <div>{date}</div>
            </div>
            <h2>{title}</h2>
            <p>{summary}</p>
            <div>
                <div>
                    <div>{topics[0]}</div>
                    <div>8 minute read</div>
                </div>
                <div>
                    <div>{topics[0]}</div>
                    <div>8 minute read</div>
                </div>
            </div>
        </div>
    );
};

export default PostPreview;
