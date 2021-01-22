const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGLE_ISFETCHING = "TOGLE_ISFETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [  ],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
    return { ...state, users: action.users}
  } else if (action.type === SET_CURRENT_PAGE) {
    return { ...state, currentPage: action.currentPage}
  } else if (action.type === SET_TOTAL_COUNT) {
    return { ...state, totalUsersCount: action.totalCount}
  } else if (action.type === TOGLE_ISFETCHING) {
    return { ...state, isFetching: action.isFetching}
  } else if (action.type === FOLLOWING_IN_PROGRESS) {
    return {
      ...state,
      followingInProgress: action.isProgress
      ? [...state.followingInProgress, action.userId]
      : state.followingInProgress.filter(id => id != action.userId)
    }
  }
  return state;

}

export let followAction = (userId) => ({ type: FOLLOW, userId });

export let unfollowAction = (userId) => ({ type: UNFOLLOW, userId });

export let setUsersAction = (users) => ({ type: SET_USERS, users });

export let setCurrentPageAction = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export let setTotalUsersCountAction = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export let togleIsFetchingAction = (isFetching) => ({ type: TOGLE_ISFETCHING, isFetching });

export let togleFollowingProgressAction = (isProgress, userId) => ({ type: FOLLOWING_IN_PROGRESS, isProgress, userId });


export default usersPageReduser;
