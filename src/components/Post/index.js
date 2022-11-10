import React from 'react';

import './index.css';

function Post(props) {
    
    return <article key={props.postId} id="post">
    
    <h1>{props.title}</h1>
    <h2>
        <span>{props.author}</span>
        <span>{props.date}</span>
    </h2>
    <p>{props.text}</p>
    {props.highlights.map((item, index) => {
            return (
            <ul>
                <li key={index} >
                    {item}
                </li>
            </ul>  
            )
        })}
    
    <img src={props.image.link} alt={props.image.alt}/>
    
 
  </article>;
}

export default Post;
