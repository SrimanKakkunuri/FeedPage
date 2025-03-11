
import './feed.css';
import Post from '../../molecules/post/Post.jsx';


export const Feed = ({posts,commentHandler}) => {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} commentHandler={commentHandler}/>
      ))}
    </div>
  );
};

export default Feed;