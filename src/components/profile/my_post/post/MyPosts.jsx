import React from 'react';
import clasess from './MyPosts.module.css';
import Post from '../Post.jsx'
import { addPosctActionCreator, updateNewPostTextCreator } from '../../../../redux/profile-reducer.js';

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPosctActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreator(text));
    };

    return (
        <div className={clasess.postBock}>
            <h1>My posts</h1>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post  </button>
                </div>
            </div>
            <div className={clasess.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;