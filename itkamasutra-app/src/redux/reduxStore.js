import {combineReducers, createStore } from 'redux'

import profalePageReduser from './profalePageReduser';
import dialogPageReduser from './dialogPageReduser';

let reducers = combineReducers({
  profilePage: profalePageReduser,
  dialogPage: dialogPageReduser
});

let store = createStore(reducers);




export default store;
