import React from 'react';

import './index.css';

function Post({ post }) {
    const { postId, title, author, date, text, highlights, image } = post;
  
    return (
      <article id={`post-${postId}`} className="post">
        <h2>{title}</h2>
        <span className="subHeading">
          <span>{author}</span>
          <span>{' - '}</span>
          <span>{date}</span>
        </span>
        <p>{text}</p>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <img src={image.link} alt={image.alt} className="image"/>
      </article>
    );
  }
  
  export default Post;