import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItems from './dialogitem/dialogitem';
import Message from './message/message';

const Dialogs = (props) => {

    let dialogsElemets = 
    props.dialogsPage.dialogs.map((d) => <DialogItems name={d.name} id={d.id} />);

    let messagesElemets = 
    props.dialogsPage.messages.map((m) => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElemets}
            </div>
            <div className={classes.messages}>
                {messagesElemets}
            </div>
            <div>
            <textarea ref = {newMessageElement}></textarea>
            <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;