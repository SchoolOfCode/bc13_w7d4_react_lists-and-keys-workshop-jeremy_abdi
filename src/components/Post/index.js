import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <ul key = {props.key}>
    <li>
       {props.postId}
    </li>
    <li>
        {props.title}
    </li>
    <li>
        {props.date}
    </li>
    <li>
        {props.author}
    </li>
    <li>
        {props.text}
    </li>
    <li>
        {props.highlights}
    </li>
    <li>
        {props.image}
    </li>
  </ul>
  </article>;
}

export default Post;
