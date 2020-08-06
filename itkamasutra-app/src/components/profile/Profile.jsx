import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './myPosts/MyPosts'
import style from './Profile.module.css';



const Profile = () => {
  return (
    <div>

      <ProfileInfo/>
      <MyPosts/>

    </div>
  );
}

export default Profile;
