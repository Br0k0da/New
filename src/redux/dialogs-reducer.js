const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreater = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMessageBodyCreater = (text) =>
    ({ type: 'UPDATE-NEW-MESSAGE-BODY', body: text })

export default dialogsReducer;