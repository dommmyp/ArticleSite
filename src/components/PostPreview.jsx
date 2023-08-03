
import React from 'react';
import { Link } from 'react-router-dom';
import './PostPreview.css'

const PostPreview = ({ post }) => {

    if (!post) {
        return <div>Post not found!</div>;
    }

    const { title, user, topics, content, date, _id } = post;
    const myDate = new Date(date)
    const dateArr = myDate.toDateString().split(' ');
    const day = dateArr[0] + ' ' + dateArr[1] + ' ' + dateArr[2];

    return (
        <div className="postpreview">
            <div className="post-preview-header">
                <div>{user}</div>
                <div>{day}</div>
            </div>
            <h2><Link to={`/post/${_id}`}>{title}</Link></h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
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
