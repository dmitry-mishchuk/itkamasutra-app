import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css';

const Technologies = () => {
  return (
    <nav className={`${style.nav}`}>

      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}>News</NavLink>
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
