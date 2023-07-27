import PostPreview from './PostPreview'

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            <div className="post-header">
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
                <div>For You</div>
            </div>
            {posts.map(post => (
                <PostPreview key={post.id} post={post} />
            ))
            }
        </div>
    );
};

export default PostList;
