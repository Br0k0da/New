import React from 'react';
import clasess from './Post.module.css';


const Post = (props) => {

    return (
        <div>
            <div className={clasess.post}>
                <div className={clasess.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVaOTPsLk6a9KaxGDIR21Hvaan69ZhYgneg&usqp=CAU'></img>
                    {props.message}
                    <div>
                        <span>like</span> {props.likesCount}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;