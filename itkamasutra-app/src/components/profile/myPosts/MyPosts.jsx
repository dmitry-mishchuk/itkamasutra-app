import React from 'react';
import Post from './post/Post';
import style from './MyPosts.module.css';


const MyPosts = (props) => {
  let postElement = props.profilePage.posts.map( (post) => <Post message={post.message} likeCount={post.likeCount}/> );
  let newPosrElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChanche = () => {
      let text = newPosrElement.current.value;
      props.updatePostChanche(text);
  }

  return (
      <div className={style.postsblock}>
          <h3>My Post</h3>
          <hr/>
          <div>
              <div>
                  <textarea
                  onChange={ onPostChanche }
                  ref={ newPosrElement }
                  value={ props.profilePage.newPostText }></textarea>
              </div>
              <div>
                  <button onClick={ onAddPost }>Add post</button>
              </div>
          </div>
          <div>
            {postElement}
          </div>
      </div>
  );
}

export default MyPosts;
