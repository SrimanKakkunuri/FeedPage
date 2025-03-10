
import './feed.css';
import Post from '../../molecules/post/Post.jsx';


export const Feed = ({posts, handleLike}) => {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} handleLike={handleLike}/>
      ))}
    </div>
  );
};

export default Feed;