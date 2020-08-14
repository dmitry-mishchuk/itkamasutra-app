import React from 'react';
import MyPosts from './MyPosts';
import {addPostAction, updatePostAction} from './../../../redux/profalePageReduser';
import {connect} from 'react-redux'

//создана функция для получения стейта компоненты и проброса его в пропсы
let mapStateToProps = (state) => {
  return {
      profilePage: state.profilePage
  }
};


//создана функция для диспатчей который нужны калбекам компоненты и проброса их в пропсы
let mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    addPost: () => { dispatch(addPostAction()); },
    updatePostChanche: (text) => { dispatch(updatePostAction(text)); }
  }
};


//создание контейнерной компоненты для отрисовки постов
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
