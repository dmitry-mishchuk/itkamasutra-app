import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${style.dialog} ${style.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}


const Message = (props) => {
  return (
    <div className={style.massage}>{props.message}</div>
  );
}


const Dialogs = (props) => {
  let dialogs = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Olena'},
    {id: '3', name: 'Nikita'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Valera'},
  ]

  let massages = [
    {id: '1', message: "Hi"},
    {id: '2', message: "Yo"},
    {id: '3', message: "Likita"},
    {id: '4', message: "Hello"},
    {id: '5', message: "Valera"},
  ]

  let dialogsElements = dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );

  let messagesElements = massages.map( (message) => <Message message={message.message}/> );

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
