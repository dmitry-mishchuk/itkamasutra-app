import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/computer-icons-user-profile-person-png-clip-art.png';
import style from './user.module.css';
import * as axios from 'axios';
import { usersAPI } from './../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1 ; i <= pagesCount ; i += 1){
    pages.push(i);
  }
  return (
    <div>
      <div className={style.wraper}>
          {pages.map( (p) => {
            return <span className={props.currentPage === p && style.selectedPage}
            onClick={ (event) => { props.onPageChanged(p) } }> {p} </span>
          })}
      </div>
    {
      props.users.map( user => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.photo}/>
              </NavLink>
            </div>
            <div>

              { user.followed
                ? <button disabled={ props.followingInProgress.some(id => id === user.id) }
                          onClick={ () => { props.unfollow(user.id); } }>Unfollow</button>
                : <button disabled={ props.followingInProgress.some(id => id === user.id) }
                          onClick={ () => { props.follow(user.id); } }>Follow</button> }

            </div>
          </span>

          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.city"}</div>
              <div>{"user.location.contry"}</div>
            </span>
          </span>
        </div>
      ))
    }
    </div>
  );
}

export default Users;
