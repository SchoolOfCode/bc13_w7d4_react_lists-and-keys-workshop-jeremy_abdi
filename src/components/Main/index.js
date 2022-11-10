import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';


function Main() {
  const [posts, setPosts] = useState(samplePosts);

  const postElement = posts.map(post=>{

  return ( <Post 
      
      key = {post.postId}
      postID = {post.postId} 
      title = {post.title}
      date = {post.date}
      author = {post.author}
      text = {post.text}
      highlights = {post.highlights}
      image = {post.image}
      />)
})

return <main id="main">{postElement}</main>;
}

export default Main;
