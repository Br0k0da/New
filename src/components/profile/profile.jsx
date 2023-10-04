import React from 'react';
import clasess from './profile.module.css';
import MyPosts from './my_post/post/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1664853811022-33e391e36169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'></img>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;