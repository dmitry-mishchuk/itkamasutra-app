import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {followAction, unfollowAction, setUsersAction, setCurrentPageAction, setTotalUsersCountAction, togleIsFetchingAction} from './../../redux/usersPageReduser' ;

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
      }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
