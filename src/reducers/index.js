import {combineReducers} from "redux";

import mainReducer from "./MainReducer";
import BooksReducer from "./BooksReducer";
import NewsReducer from "./NewsReducer";

 const rootReducer = combineReducers({
    selectedBook:mainReducer,
    books : BooksReducer,
    news: NewsReducer
})
export default rootReducer;