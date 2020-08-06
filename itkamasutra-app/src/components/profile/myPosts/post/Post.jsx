import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
          <div className={style.item}>
            <img src="https://cdn4.iconfinder.com/data/icons/education-253/64/teacher-avatar-profession-man-dad-father-512.png"/>
            {props.message}
            <span>
              {props.likeCount}
            </span>
          </div>
  );
}


export default Post;
