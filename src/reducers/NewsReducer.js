import { SELECT_CHANNEL,DEFAULT_NEWS, RECEIVE_NEWS, REQUEST_CHANNEL } from "./../actionType";

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
        loading: true,
        channelName: action.channelName
      };
    case RECEIVE_NEWS:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    case DEFAULT_NEWS:
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
