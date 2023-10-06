import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
