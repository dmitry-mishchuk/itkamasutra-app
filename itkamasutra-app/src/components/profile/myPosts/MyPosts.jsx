import React from 'react';
import Post from './post/Post';
import style from './MyPosts.module.css';

const MyPosts = () => {

  let posts = [
    {id: '1', message: "Hi, how are you", likeCount: 12},
    {id: '2', message: "It's, my first post", likeCount: 5}
  ]

  let postElement = posts.map( (post) => <Post message={post.message} likeCount={post.likeCount}/> );

  return (
      <div className={style.postsblock}>
          <h3>My Post</h3>
          <hr/>
          <div>
              <div>
                  <textarea></textarea>
              </div>
              <div>
                  <button>Add post</button>
              </div>
          </div>
          <div>
            {postElement}
          </div>
      </div>
  );
}

export default MyPosts;
