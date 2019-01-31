import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";

const rootReducer = combineReducers({
    news: NewsReducer
})
export default rootReducer;