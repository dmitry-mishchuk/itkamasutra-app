import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from './../common/Preloader';
import {usersAPI} from './../../api/api';


class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.togleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.togleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.togleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.togleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
                                                           followingInProgress={this.props.followingInProgress}/>

            }
          </>

  }
}

export default UsersAPIComponent;
