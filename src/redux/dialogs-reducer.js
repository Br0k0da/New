const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
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

export const sendMessageActionCreater = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreater = (text) => 
        ({type: 'UPDATE-NEW-MESSAGE-BODY', body: text})

export default dialogsReducer;