import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from './../../redux/profalePageReduser';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14278;
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  render() {
    return (<Profile {...this.props} profile={this.props.profile}
                                     status={this.props.status}
                                     updateStatus={this.props.updateStatusThunkCreator} />);
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth
})

export default compose(
  connect (mapStateToProps, {getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
