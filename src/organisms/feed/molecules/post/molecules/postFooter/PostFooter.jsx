import './postFooter.css';


export default function PostFooter({ likes, comments, shares, caption, userName, postDate }){

  
    const formattedDate = new Date(postDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="post-footer">
          <div className="action-buttons">
              <div>
                <button className="like-btn"><i className="fa-regular fa-heart fa-lg like-button-icon"></i></button>
                <span>{likes}</span>
              </div>
              <div>
                <button><i className="fa-regular fa-message fa-lg"></i></button>
                <span>{comments}</span>
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
          
          <div className="comments-date">
            {comments > 0 && (
              <button className="view-comments">
                View all {comments} comments
              </button>
            )}
            <span className="post-date">{formattedDate}</span>
          </div>
        </div>
      );
}