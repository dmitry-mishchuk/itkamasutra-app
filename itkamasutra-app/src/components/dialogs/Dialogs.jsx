import React from 'react';
import Message from './message/Message';
import DialogItem from './dialogItem/DialogItem';
import style from './Dialogs.module.css';
import {Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {

  let dialogsElements = props.dialogPage.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = props.dialogPage.messages.map( (message) => <Message message={message.message}/> );
  let messageTextArea = props.dialogPage.newMessageText;

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChanchMessage = (event) => {
    //let text = event.target.value;
    let text = event;
    props.chanchMessage(text);
  }
  let addNewMessage = (values) => {
    onChanchMessage(values.messageTextArea);
    onAddMessage();
  }

  return(
    <div className={style.dialogs}>

        <div className={style.dialogsItem}>
            {dialogsElements}
        </div>

        <div className={style.messages}>
            {messagesElements}
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>

    </div>
  );
}
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="textarea" name="messageTextArea" placeholder="Enter your message"/>
        </div>
        <div>
          <button>Send</button>
        </div>
    </form>
  );
}
const AddMessageReduxForm = reduxForm({form: 'dialogaddmessageform'})(DialogsForm);

export default Dialogs;
