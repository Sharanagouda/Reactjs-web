import {RETURN_STATE,SELECT_BOOK,UPDATE_BOOK,ADD_BOOK,DELETE_BOOK,EDIT_BOOK} from "../actionType";

export default (state = {}, action)=>{
    switch(action.type){
        case RETURN_STATE:
            return action.payload;
        case SELECT_BOOK:
            return action.payload;
        case ADD_BOOK:
            return state.concat([action.data]);
        case DELETE_BOOK:
            return state.filter((book)=>book.id !== action.id);
        case EDIT_BOOK:
            return state.map((book)=>book.id === action.id ? {...book, editing:!book.editing}:book)
        default:{
            return state;
        }
    }
}