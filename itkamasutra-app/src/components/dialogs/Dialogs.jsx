import React from 'react';
import Message from './message/Message';
import DialogItem from './dialogItem/DialogItem';
import style from './Dialogs.module.css';
import {updateMessageAction, addMessageAction} from './../../redux/dialogPageReduser';

const Dialogs = (props) => {

  let dialogsElements = props.dialogPage.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = props.dialogPage.messages.map( (message) => <Message message={message.message}/> );
  let messageTextArea = props.dialogPage.newMessageText;

  let addMessage = () => {
    let action = addMessageAction();
    props.dispatch(action);
  };

  let onChanchMessage = (event) => {
    let text = event.target.value;
    let action = updateMessageAction(text);
    props.dispatch(action);
  }


  return(
    <div className={style.dialogs}>

      <div className={style.dialogsItem}>
          {dialogsElements}
      </div>

      <div className={style.messages}>
        {messagesElements}
        <div>
          <textarea
          value={ messageTextArea }
          onChange={ onChanchMessage }></textarea>
        </div>
        <div>
          <button onClick={ addMessage }>Add Message</button></div>
      </div>



    </div>
  );
}

export default Dialogs;
