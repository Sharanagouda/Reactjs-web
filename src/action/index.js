import {
  SELECT_BOOK,
  SELECT_CHANNEL,
  RECEIVE_POST,
  REQUEST_CHANNEL,
  ADD_BOOK,
  EDIT_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  RETURN_STATE,
  GET_EMPLOYEE,
  EDIT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from "../actionType";

const MY_API_KEY = "794fb53245dd45b0b2564f86257a2983";

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
});

export const requestPosts = () => ({
  type: REQUEST_CHANNEL
});

export function receivedPosts(json) {
  return {
    type: RECEIVE_POST,
    payload: json.articles
  };
}

export function fetchPost(channel) {
  return dispatch => {
    dispatch(requestPosts());
    return (
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${MY_API_KEY}`,
        {
          method: "GET"
        }
      )
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          dispatch(receivedPosts(jsonResult));
        }),
      error => console.log(error)
    );
  };
}

export function receivedEmpolyee(json) {
  return {
    type: GET_EMPLOYEE,
    payload: json
  };
}
export function getALLEmployee() {
  return dispatch => {
    return (
      fetch(`http://dummy.restapiexample.com/api/v1/employees`, {
        method: "GET"
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          dispatch(receivedEmpolyee(jsonResult));
        }),
      error => console.log(error)
    );
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}
// export function getALLEmployee(data){
//     return{
//         type:RETURN_STATE,
//        payload:data
//     }
//     //console.log("a book has been selected", book.title)
// }

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  };
  //console.log("a book has been selected", book.title)
}
export function addnewBookDetails(book) {
  // return{
  //     type:ADD_BOOK,
  //     payload:book
  // }
  console.log("a book has been selected", book);
}
export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    payload: book
  };
  //console.log("a book has been selected", book.title)
}
export function editBook(book) {
  return {
    type: EDIT_BOOK,
    payload: book
  };
  //console.log("a book has been selected", book.title)
}
export function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    payload: book
  };
  //console.log("a book has been selected", book.title)
}
