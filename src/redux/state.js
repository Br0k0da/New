import { renderEntireTree } from "../Render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'HI', likesCount: 0 },
            { id: 2, message: 'By', likesCount: 10 },
            { id: 3, message: 'Nigga, where my mony, bitch?', likesCount: -100 },
            { id: 4, message: 'Suka', likesCount: 1 },
            { id: 5, message: 'BebraAAAAAAAAAAAAAAAAAAAA', likesCount: 9999999999 },
            { id: 6, message: 'RUKA BLUD', likesCount: 2281337 },
        ],
        newPostText: "BUBA BOBA"
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Danil' },
            { id: 2, name: 'Artur' },
            { id: 3, name: 'Huy' },
            { id: 4, name: 'Tigr' },
            { id: 5, name: 'Arus' },
            { id: 6, name: 'Ar' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'By' },
            { id: 3, message: 'How are you?' },
            { id: 4, message: 'Byby' },
        ]
    },

    sidebar: {

    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;   