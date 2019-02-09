import {ADD_DATA, DELETE_DATA, UPDATE_DATA, EDIT_DATA, GET_DATA} from "../actionType";

  const initialState = {
    userApiData: []
};

const reduxApiCrudReducer = (state=initialState, action)=>{
switch(action.type){
    case GET_DATA:
    return {
        ...state,
        payload: action.payload.posts,
      };
    case ADD_DATA :
    return {
          ...state,
          payload:action.payload
      };
    case EDIT_DATA :
    return {
            ...state,
            payload:action.payload
        };
    case UPDATE_DATA :
    return {
        ...state,
        payload:action.payload
    };
    case DELETE_DATA :
    return {
            ...state,
            payload:action.payload
        };
    default:
    return state;
}
}

export default reduxApiCrudReducer;