import { authAPI } from './../api/api';

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  data:	{
    id:	null,
    login:	null,
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
        isAuth: true
      }
    default:
      return state;
  }
}

// Create Action Creator
export let setAuthUserDataAction = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} });

// Create ThunkCreator
export const getAuthMeThunkCreator = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0){
          let {id, login, email} = response.data.data;
          dispatch(setAuthUserDataAction(id, login, email));
        }
    });
  }
}


export default authReducer;
