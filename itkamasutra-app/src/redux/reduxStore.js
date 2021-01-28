import {applyMiddleware, combineReducers, createStore } from 'redux'

import profalePageReduser from './profalePageReduser';
import dialogPageReduser from './dialogPageReduser';
import usersPageReduser from './usersPageReduser';
import authReducer from './authReducer';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profalePageReduser,
  dialogPage: dialogPageReduser,
  usersPage: usersPageReduser,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;


export default store;
