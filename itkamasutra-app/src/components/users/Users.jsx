import React from 'react';
import style from './user.module.css';

const Users = (props) => {

debugger;
  if(props.users.length === 0){
    props.setUsers( [
      {id: 1,
        photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
        followed: false, firstName: 'Dima', status: 'I am a boss', location: {city:'Kyiv', contry:'Ukraine'}},
      {id: 2,
        photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
        followed: true, firstName: 'Olga', status: 'I am a teacher', location: {city:'Moscow', contry:'Russia'}},
      {id: 3,
        photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
        followed: false, firstName: 'Maks', status: 'The boy', location: {city:'Minsk', contry:'Belarus'}}
    ] );
  }



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
