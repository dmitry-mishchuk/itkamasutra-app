import React from 'react';
import style from './Navbar.module.css';

const Technologies = () => {
  return (
    <nav className={`${style.nav}`}>

      <div className={style.item}>
        <a>Profile</a>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <a>Messeges</a>
      </div>

      <div className={style.item}>
        <a>News</a>
      </div>

      <div className={style.item}>
        <a>Music</a>
      </div>

      <div className={style.item}>
        <a href="#">Setting</a>
      </div>

    </nav>
  );
}

export default Technologies;
