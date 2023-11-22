import React from 'react';
import clasess from './MyPosts.module.css';
import Post from '../Post.jsx'

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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