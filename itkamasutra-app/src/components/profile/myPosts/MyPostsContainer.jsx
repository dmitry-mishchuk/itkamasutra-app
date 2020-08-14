import React from 'react';
import MyPosts from './MyPosts';
import {addPostAction, updatePostAction} from './../../../redux/profalePageReduser';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
      profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostAction()); },
    updatePostChanche: (text) => { dispatch(updatePostAction(text)); }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
