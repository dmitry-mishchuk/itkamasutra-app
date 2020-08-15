import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAction, unfollowAction, setUsersAction} from './../../redux/usersPageReduser' ;

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
      follow: (userId) => {
        dispatch(followAction(userId));
      },
      unfollow: (userId) => {
        dispatch(unfollowAction(userId));
      },
      setUsers: (users) => {
        dispatch(setUsersAction(users));
      }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
