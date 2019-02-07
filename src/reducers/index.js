import { combineReducers } from "redux";

import BookReducer from "./BookReducer";
import BooksJSON from "./BooksJSON";
import NewsReducer from "./NewsReducer";
import Employees from "./EmployeeReducer";
import PostReducer from "./PostReducer";


const rootReducer = combineReducers({
  selectedBook: BookReducer,
  books: BooksJSON,
  news: NewsReducer,
  employees: Employees,
  posts:PostReducer,
});
export default rootReducer;
