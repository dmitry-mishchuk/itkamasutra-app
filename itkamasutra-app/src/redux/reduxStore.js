import {applyMiddleware, combineReducers, createStore } from 'redux'

import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';
import newsPageReducer from './newsPageReducer';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  newsPage: newsPageReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;


export default store;
