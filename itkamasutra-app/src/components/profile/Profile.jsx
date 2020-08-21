import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer'
import style from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>

      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>

    </div>
  );
}

export default Profile;
