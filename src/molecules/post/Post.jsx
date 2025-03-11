import React from 'react';
import './post.css';
import PostHeader from '../../atoms/postHeader/PostHeader.jsx';
import PostContent from '../../atoms/postContent/PostContent.jsx';
import PostFooter from '../../atoms/postFooter/PostFooter.jsx';

export default function Post({post,commentHandler}){
    const {
        userName,
        location,
        imageUrl,
        caption,
        likes,
        noOfComments,
        shares,
        postDate,
        id,
        comments
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
            likes={likes}
            noOfComments={noOfComments}
            shares={shares}
            caption={caption}
            userName={userName}
            postDate={postDate}
            commentHandler={commentHandler}
            id={id}
            comments={comments}
          />
        </article>
      );
};
