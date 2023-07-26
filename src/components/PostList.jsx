import PostPreview from './PostPreview'

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostPreview key={post.id} post={post} />
            ))
            }
        </div>
    );
};

export default PostList;
