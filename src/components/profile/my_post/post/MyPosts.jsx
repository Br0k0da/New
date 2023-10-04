import React from 'react';
import clasess from './MyPosts.module.css';
import Post from '../Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='HI' likesCount='0'/>
                <Post message='By' likesCount='9999'/>
            </div>
        </div>
    );
}

export default MyPosts;