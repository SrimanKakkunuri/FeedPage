import './postFooter.css';



export default function PostFooter({ likes, comments, shares, caption, userName, postDate, id, handleLike ,isLiked}){

    const formattedDate = new Date(postDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });

    function likeHandler(){
      handleLike(id);
    }


    return (
        <div className="post-footer">
          <div className="action-buttons">
              <div>
                <button className="like-btn" onClick={likeHandler}>{isLiked ? <i class="fa-solid fa-heart fa-lg" style={{color: "#ff0000"}}></i> : <i className="fa-regular fa-heart fa-lg"></i> }</button>
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
