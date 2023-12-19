const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'HI', likesCount: 0 },
        { id: 2, message: 'By', likesCount: 10 },
        { id: 3, message: 'Nigga, where my mony, bitch?', likesCount: -100 },
        { id: 4, message: 'Suka', likesCount: 1 },
        { id: 5, message: 'BebraAAAAAAAAAAAAAAAAAAAA', likesCount: 9999999999 },
        { id: 6, message: 'RUKA BLUD', likesCount: 2281337 },
    ],
    newPostText: "BUBA BOBA"
}

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPosctActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })


export default profileReducer;