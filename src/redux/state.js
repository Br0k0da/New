import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store =
{
    _state: {
        profilePage:
        {
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

        dialogsPage:
        {
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
            ],
            newMessageBody: "",
        },

        
    },
    _callSubscriber() { 
    
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

        this._callSubscriber(this._state);
    }
}


        


export default store;   
window.state = store;