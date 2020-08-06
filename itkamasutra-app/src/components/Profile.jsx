import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://img.travel.ru/images2/2015/07/object246916/002_m1.jpg'/>
      </div>

      <div>
        AVA
      </div>

      <div>
        My Post
        <div>New Post</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
