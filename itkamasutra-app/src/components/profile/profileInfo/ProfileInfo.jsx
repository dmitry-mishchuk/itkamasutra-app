import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
        <div>
          <img src='https://img.travel.ru/images2/2015/07/object246916/002_m1.jpg'/>
        </div>

        <div className={style.descriptionBlock}>
          AVA
        </div>
    </div>
  );
}

export default ProfileInfo;
