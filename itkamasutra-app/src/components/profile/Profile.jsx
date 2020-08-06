import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './myPosts/MyPosts'
import style from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>

      <ProfileInfo/>
      <MyPosts profalePage={props.profalePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

    </div>
  );
}

export default Profile;
