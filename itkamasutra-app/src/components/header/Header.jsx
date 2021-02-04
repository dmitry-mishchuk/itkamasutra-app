import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

  return (
    <header className={style.header}>
      <img src="https://www.pinclipart.com/picdir/middle/387-3873569_catalyst-react-js-logo-svg-clipart.png"
           alt="logo"/>
      <div className={style.loginBlock}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
