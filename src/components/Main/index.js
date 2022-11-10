import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

// In the `<Main/>` component (src/components/Main), use the map() method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

// const postTemplate = {
//   postId: 0,
//   title: 'a title',
//   date: 'DD/MM/YY',
//   author: 'author',
//   text: lorem.generateParagraphs(7),
//   highlights: [
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//   ],
//   image: { link: 'link', alt: 'alt' },

// Set the `key` prop for each `<Post/>` component as the `postId` property contained within the post object.

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
console.log(postElement)
return <main id="main">{postElement}</main>;
}

export default Main;
