import React from 'react';
import Users from './Users';
import Preloader from './../common/Preloader';
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
  unfollowThunkCreator } from './../../redux/usersPageReducer' ;
import {compose} from 'redux';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {

    return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           users={this.props.users}
                                                           unfollow={this.props.unfollow}
                                                           follow={this.props.follow}
                                                           togleFollowing={this.props.togleFollowing}
                                                           followingInProgress={this.props.followingInProgress}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           />

            }
          </>

  }
}



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

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
