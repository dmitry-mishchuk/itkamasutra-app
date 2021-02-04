import { authAPI } from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  data:	{
    id:	null,
    login: null,
    email: null
  },
  messages:	[],
  fieldsErrors:	[],
  resultCode:	0,
  isFetching: true,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: {...state.data, ...action.data},
        isAuth: action.isAuth
      }
    default:
      return state;
  }
}

// Create Action Creator
export let setAuthUserDataAction = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: {id, login, email}, isAuth });

// Create ThunkCreator
export const getAuthMeThunkCreator = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0){
          let {id, login, email} = response.data.data;
          dispatch(setAuthUserDataAction(id, login, email, true));
        }
    });
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0){
        dispatch(getAuthMeThunkCreator());
      } else {
        dispatch(stopSubmit("login" , {email: "email or password wrong", password: "email or password wrong"}));
      }
    });
  }
}
export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0){
        dispatch(setAuthUserDataAction(null, null, null, false));
      }
    });
  }
}

export default authReducer;
