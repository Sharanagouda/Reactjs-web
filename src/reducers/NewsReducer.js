import { SELECT_CHANNEL, RECEIVE_POST, REQUEST_CHANNEL } from "./../actionType";

const newsReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: action.channel
            };
        case REQUEST_CHANNEL:
            return {
                ...state,
                loading: true
            }
                ;
        case RECEIVE_POST:
            return {
                ...state,
                payload: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default newsReducer;