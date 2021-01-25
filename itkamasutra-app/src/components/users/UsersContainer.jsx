import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {
  followAction,
  unfollowAction,
  setUsersAction,
  setCurrentPageAction,
  setTotalUsersCountAction,
  togleIsFetchingAction,
  togleFollowingProgressAction,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator } from './../../redux/usersPageReduser' ;

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
      },
      setCurrentPage: (page) => {
        dispatch(setCurrentPageAction(page));
      },
      setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAction(totalCount));
      },
      togleIsFetching: (isFetching) => {
        dispatch(togleIsFetchingAction(isFetching));
      },
      togleFollowing: (progres) => {
        dispatch(togleFollowingProgressAction(progres));
      },
      getUsers: (currentPage, pageSize) => {
        dispatch(getUsersThunkCreator(currentPage, pageSize));
      },
      follow: (userId) => {
        dispatch(followThunkCreator(userId));
      },
      unfollow: (userId) => {
        dispatch(unfollowThunkCreator(userId));
      }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
