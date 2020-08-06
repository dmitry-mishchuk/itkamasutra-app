import React from 'react';
import Message from './message/Message';
import DialogItem from './dialogItem/DialogItem';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = props.massages.map( (message) => <Message message={message.message}/> );

  return(
    <div className={style.dialogs}>

      <div className={style.dialogsItem}>
          {dialogsElements}
      </div>

      <div className={style.messages}>
        {messagesElements}
      </div>

    </div>
  );
}

export default Dialogs;
