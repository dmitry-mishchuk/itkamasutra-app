import React from 'react';
import style from './user.module.css';

const Users = (props) => {
  debugger;
  return (
    <div>
    {
      props.users.map( user => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={style.photo}/>
            </div>
            <div>
              { user.followed ?
                <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button> :
                <button onClick={ () => { props.follow(user.id) } }>Follow</button> }

            </div>
          </span>

          <span>
            <span>
              <div>{user.firstName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.contry}</div>
            </span>
          </span>
        </div>
      ))
    }

    </div>
  );
}
export default Users;
