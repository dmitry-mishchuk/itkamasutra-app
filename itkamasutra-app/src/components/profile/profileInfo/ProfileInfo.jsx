import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
        <div>
          <img src='https://img.travel.ru/images2/2015/07/object246916/002_m1.jpg'/>
        </div>

        <div className={style.descriptionBlock}>
          <div><img src={props.profile.photos.large}/></div>
          <p>{props.profile.fullName}</p>
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
}

export default ProfileInfo;
