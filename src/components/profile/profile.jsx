import React from 'react';
import classes from './profile.module.css';
import MyPosts from './my_post/post/MyPosts';
import ProfileInfo from './profile_info/profile_info';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText} 
                updateNewPostText = {props.updateNewPostText}/>
        </div>
    );
}

export default Profile;