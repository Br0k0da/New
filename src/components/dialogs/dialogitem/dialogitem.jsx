import React from 'react';
import classes from './../dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;