import React from "react";
import classes from './profile_info.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1664853811022-33e391e36169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'></img>
            </div>
            <div className={classes.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}
export default ProfileInfo; 