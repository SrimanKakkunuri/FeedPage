
import './feed.css';
import Post from '../../molecules/post/Post.jsx';


export const Feed = ({posts}) => {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;