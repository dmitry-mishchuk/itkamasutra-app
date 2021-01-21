import {combineReducers, createStore } from 'redux'

import profalePageReduser from './profalePageReduser';
import dialogPageReduser from './dialogPageReduser';
import usersPageReduser from './usersPageReduser';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profalePageReduser,
  dialogPage: dialogPageReduser,
  usersPage: usersPageReduser,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;


export default store;
