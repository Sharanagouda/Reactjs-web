import { combineReducers } from "redux";

import BookReducer from "./BookReducer";
import BooksJSON from "./BooksJSON";
import NewsReducer from "./NewsReducer";
import Employees from "./EmployeeReducer";
import PostReducer from "./PostReducer";
import ApiDataReducer from "./ReduxApiCrudReducer";

const rootReducer = combineReducers({
  selectedBook: BookReducer,
  books: BooksJSON,
  news: NewsReducer,
  employees: Employees,
  posts:PostReducer,
  apiData: ApiDataReducer
});
export default rootReducer;
