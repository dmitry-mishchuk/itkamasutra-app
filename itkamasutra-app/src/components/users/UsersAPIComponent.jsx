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

export default UsersAPIComponent;
