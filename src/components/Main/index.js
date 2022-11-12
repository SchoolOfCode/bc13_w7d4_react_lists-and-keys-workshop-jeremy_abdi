import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';


function Main() {
  const [posts] = useState(samplePosts);

  return (
    <main className="main">
      {posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </main>
  );
}

export default Main;
