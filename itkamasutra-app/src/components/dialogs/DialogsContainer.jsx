import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageAction, addMessageAction} from './../../redux/dialogPageReduser';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addMessageAction()); },
    chanchMessage: (text) => { dispatch(updateMessageAction(text)); }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
