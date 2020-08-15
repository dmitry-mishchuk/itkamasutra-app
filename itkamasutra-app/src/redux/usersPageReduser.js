const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [  ]
};

const usersPageReduser = (state = initialState, action) => {
debugger;
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
    console.log(action.users);
    return { ...state, users: [...state.users, ...action.users]}
  }
  return state;

}

export let followAction = (userId) => ({ type: FOLLOW, userId });

export let unfollowAction = (userId) => ({ type: UNFOLLOW, userId });

export let setUsersAction = (users) => ({ type: SET_USERS, users });


export default usersPageReduser;
