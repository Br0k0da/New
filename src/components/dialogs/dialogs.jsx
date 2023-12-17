import React from 'react';
import classes from './dialogs.module.css';
import DialogItems from './dialogitem/dialogitem';
import Message from './message/message';
import {updateNewMessageBodyCreater, sendMessageActionCreater } from '../../redux/dialogs-reducer.js';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElemets =
        state.dialogs.map((d) => <DialogItems name={d.name} id={d.id} />);

    let messagesElemets =
        state.messages.map((m) => <Message message={m.message} />)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreater())
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body))
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={classes.messages}>
                <div>{messagesElemets}</div>
            </div>
            <div>
                <div><textarea value={newMessageBody} placeholder='Enter Message' onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;