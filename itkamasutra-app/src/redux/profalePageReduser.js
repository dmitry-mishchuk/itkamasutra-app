import { usersAPI, profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  status: "",
  posts: [
    {id: '1', message: "Hi, how are you", likeCount: 12},
    {id: '2', message: "It's, my first post", likeCount: 5}
  ],
  newPostText: "kamasutra",
  profile: null
};

const profalePageReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
          let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount:0
          };
          let stateCopy = {...state};
          stateCopy.posts = [...state.posts];
          stateCopy.posts.push(newPost);
          stateCopy.newPostText = '';
          return stateCopy;
    }
    case UPDATE_POST_CHANGE:{
          let stateCopy = {...state};
          stateCopy.newPostText = action.message;
          return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    default:
          return state;
  }
}
// ActionCreator
export let addPostAction = () => ({ type: ADD_POST });
export let updatePostAction = (text) => {
  return { type: UPDATE_POST_CHANGE, message: text};
};
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
const setStatusAction = (text) => ({type: SET_STATUS, status: text})

// Create ThunkCreator
export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatusAction(response.data));
    });
  }
}
export const updateStatusThunkCreator = (text) => {
  return (dispatch) => {
    profileAPI.updateStatus(text).then(response => {
      if (response.data.resultCode === 0){
        dispatch(setStatusAction(text));
      }
    });
  }
}

export default profalePageReduser;
