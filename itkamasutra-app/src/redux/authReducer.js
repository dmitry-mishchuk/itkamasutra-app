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

export let setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} });


export default authReducer;
