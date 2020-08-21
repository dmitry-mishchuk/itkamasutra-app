import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from './../common/Preloader';


class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.togleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.togleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.togleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.togleIsFetching(false);
      this.props.setUsers(response.data.items);
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
                                                           follow={this.props.follow}/>
            }
          </>

  }
}

export default UsersAPIComponent;
