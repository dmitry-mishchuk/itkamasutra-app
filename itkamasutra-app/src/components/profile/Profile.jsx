import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer'
import style from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>

      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>

    </div>
  );
}

export default Profile;
