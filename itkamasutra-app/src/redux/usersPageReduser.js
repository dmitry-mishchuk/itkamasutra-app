const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {id: 1,
      photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: false, firstName: 'Dima', status: 'I am a boss', location: {city:'Kyiv', contry:'Ukraine'}},
    {id: 2,
      photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: true, firstName: 'Olga', status: 'I am a teacher', location: {city:'Moscow', contry:'Russia'}},
    {id: 3,
      photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: false, firstName: 'Maks', status: 'The boy', location: {city:'Minsk', contry:'Belarus'}}
  ]
};

const usersPageReduser = (state = initialState, action) => {

  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map( user => {
        if (user.id === action.userId){
          return {...user, followed: true}
        }
        return user;
      })
      };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map( user => {
        if (user.id === action.userId){
          return {...user, followed: false}
        }
        return user;
      })
    };
  } else if (action.type === SET_USERS) {
    return { ...state, users: [...state.users], ...action.users}
  }
  return state;

}

export let followAction = (userId) => ({ type: FOLLOW, userId });

export let unfollowAction = (userId) => ({ type: UNFOLLOW, userId });

export let setUsersAction = (users) => ({ type: SET_USERS, users });


export default usersPageReduser;
