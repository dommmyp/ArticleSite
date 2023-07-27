
import React from 'react';
import { Link } from 'react-router-dom';
import './PostPreview.css'

const PostPreview = ({ post }) => {

    if (!post) {
        return <div>Post not found!</div>;
    }

    const { title, user, topics, summary, date, id } = post;

    return (
        <div className="postpreview">
            <div className="post-preview-header">
                <div>{user}</div>
                <div>{date}</div>
            </div>
            <h2><Link to={`/post/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <div className="post-preview-footer">
                <div>
                    <div className="post-topic">{topics[0]}</div>
                    <div>8 minute read</div>
                </div>
                <div>
                    <div>button</div>
                    <div>button</div>
                </div>
            </div>
        </div>
    );
};

export default PostPreview;
