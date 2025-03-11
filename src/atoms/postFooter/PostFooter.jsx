import { useState } from 'react';
import './postFooter.css';


export default function PostFooter({ likes, noOfComments, shares, caption, userName, postDate , commentHandler, id ,comments}){

  const [showComments, setShowComments] = useState(false);
  const [commentText,setCommentText] = useState('');
  
    const formattedDate = new Date(postDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });

    function handleComment(){
      if(commentText.trim())
      {
        commentHandler(id,commentText);
        setCommentText('');
        setShowComments(true);
      }
    }

    function toggleComments() {
      setShowComments(!showComments);
    }

    function handleCommentInput(e){
      setCommentText(e.target.value);
    }

    return (
        <div className="post-footer">
          <div className="action-buttons">
              <div>
                <button className="like-btn"><i className="fa-regular fa-heart fa-lg like-button-icon"></i></button>
                <span>{likes}</span>
              </div>
              <div>
                <button onClick={toggleComments}><i className="fa-regular fa-message fa-lg"></i></button>
                <span>{noOfComments}</span>
              </div>
              <div>
                <button><i className="fa-solid fa-paper-plane fa-lg"></i></button>
                <span>{shares}</span>
              </div>
          </div>
    
          
          <div className="caption">
            <span className="caption-username">{userName}</span>
            <span>{caption}</span>
          </div>

          {showComments && comments && comments.length > 0 && (
            <div className="comments-section">
              <span className="comments-header">{"Comments"}</span>
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <span className="comment-text">{comment}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="comments-date">
            {noOfComments > 0 && (
              <button className="view-comments" onClick={toggleComments}>
                View all {noOfComments} comments
              </button>
            )}
            <span className="post-date">{formattedDate}</span>
          </div>

          <div className="comment-input-container">
            <input 
              type="text" 
              className="comment-input" 
              placeholder="Add a comment..." 
              aria-label="Add a comment"
              onChange={handleCommentInput}
              value={commentText}
            />
            <button className="post-comment-btn" onClick={handleComment}>Post</button>
          </div>
        </div>
      );
}