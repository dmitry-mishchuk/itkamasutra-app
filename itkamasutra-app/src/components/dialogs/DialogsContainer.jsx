import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageAction, addMessageAction} from './../../redux/dialogPageReduser';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addMessageAction()); },
    chanchMessage: (text) => { dispatch(updateMessageAction(text)); }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
