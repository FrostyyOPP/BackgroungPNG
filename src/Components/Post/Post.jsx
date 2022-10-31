import React from 'react'
import './post.css'
export const Post = ({ postImg, postName }) => {
  return (
    <div class="post">
      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={postImg} />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">{postName}</h3>
          <button class="content-text btn btn-success">Download</button>
        </div>
      </div>
    </div>
  )
}
