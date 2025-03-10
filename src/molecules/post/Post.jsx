import React from 'react';
import './post.css';
import PostHeader from '../../atoms/postHeader/PostHeader.jsx';
import PostContent from '../../atoms/postContent/PostContent.jsx';
import PostFooter from '../../atoms/postFooter/PostFooter.jsx';

export default function Post({post,handleLike}){
    const {
        userName,
        location,
        imageUrl,
        caption,
        likes,
        comments,
        shares,
        postDate,
        id,
        liked
      } = post;
    
      return (
        <article className="post">
          <PostHeader 
            userName={userName}
            location={location}
          />
          <PostContent 
            imageUrl={imageUrl}
          />
          <PostFooter 
            id={id}
            likes={likes}
            comments={comments}
            shares={shares}
            caption={caption}
            userName={userName}
            postDate={postDate}
            handleLike ={handleLike}
            isLiked={liked}
          />
        </article>
      );
};
