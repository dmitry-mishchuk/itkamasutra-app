import {combineReducers, createStore } from 'redux'

import profalePageReduser from './profalePageReduser';
import dialogPageReduser from './dialogPageReduser';
import usersPageReduser from './usersPageReduser';

let reducers = combineReducers({
  profilePage: profalePageReduser,
  dialogPage: dialogPageReduser,
  usersPage: usersPageReduser
});

let store = createStore(reducers);




export default store;
