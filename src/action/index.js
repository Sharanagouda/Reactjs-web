import {
  SELECT_BOOK,

  SELECT_CHANNEL,
  RECEIVE_NEWS,
  DEFAULT_NEWS,
  REQUEST_CHANNEL,

  ADD_BOOK,
  EDIT_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  RETURN_STATE,

  GET_EMPLOYEE,
  EDIT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,

  ADD_POST,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
  EDIT_POST,

  ADD_DATA,
  EDIT_DATA,
  GET_DATA,
  UPDATE_DATA,

  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_ITEM_UNITS
} from "../actionType";

//=================================news api actions ============================================================================//
const MY_API_KEY = "794fb53245dd45b0b2564f86257a2983";

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
});

export const requestPosts = (channelName) => ({
  type: REQUEST_CHANNEL,
  channelName:channelName
});

export function receivedPosts(json) {
  return {
    type: RECEIVE_NEWS,
    payload: json.articles,
  };
}

export function fetchPost(channelName,channelString) {
  return dispatch => {
    dispatch(requestPosts(channelName));
    return (
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=${channelString}&apiKey=${MY_API_KEY}`,
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

export function defaultReceivedPosts(json) {
  return {
    type: DEFAULT_NEWS,
    payload: json.articles
  };
}
export function defaultNews() {
  const channelNew = "country=in"
  return dispatch => {
    return (
      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${MY_API_KEY}`,
        {
          method: "GET"
        }
      )
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          dispatch(defaultReceivedPosts(jsonResult));
        }),
      error => console.log(error)
    );
  };
}
//.................news api actions end.......................................//
//-----------------------------------books -----------------------//
export function selectBook(book) {
  console.log(book);
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
//---------------------------react redux basic tutorial----------------------------------------------//
//react redux basic tutorial

export function postNewData(data){
 
  return{
    type:ADD_POST,
    postDataPayload:data
  }
}

export function deleteSelectedPost(postId){
 // console.log(postId);
  return{
    type:DELETE_POST,
    id:postId
  }
}

export function editAndUpdatePost(postId){

  return{
    type:EDIT_POST,
    id:postId,
  }
}

export function UpdatePost(postId, postData){
  return{
    type:UPDATE_POST,
    id:postId,
    data:postData
  }
}
//---------------------------end react redux basic tutorial----------------------------------------------//

//---------------------react redux Api curd operation===================================//
export function receivedApiData(json) {
  return {
    type: GET_DATA,
    payload: json
  };
}
export function getDataFromApi() {
  return dispatch => {
    return (
      fetch(`https://my-json-server.typicode.com/sharanagouda/Reactjs-web/db`, {
        method: "GET"
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          //console.log(jsonResult.posts);
          dispatch(receivedApiData(jsonResult));
        }),
      error => console.log(error)
    );
  };
}

export function newEmployeeApiData(recievedData) {
  console.log(recievedData)
  return dispatch => {
    return (
      fetch(`https://my-json-server.typicode.com/sharanagouda/Reactjs-web/db`, {
        method: "POST",
        body: JSON.stringify(recievedData),
        headers: {
          'Content-Type': 'application/json'
      }
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          console.log(jsonResult);
          //dispatch(receivedApiData(jsonResult));
        }),
      error => console.log(error)
    );
  };
}


//===============================start Employee Database===========================================//
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
          //console.log(jsonResult)
          dispatch(receivedEmpolyee(jsonResult));
        }),
      error => console.log(error)
    );
  };
}

export function postEmployeeData(recievedData) {
  console.log(recievedData)
  return dispatch => {
    return (
      fetch(`http://dummy.restapiexample.com/api/v1/create`, {
        method: "POST",
        body: JSON.stringify(recievedData),
        headers: {
          'Content-Type': 'application/json'
      }
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          console.log(jsonResult);
          //dispatch(receivedApiData(jsonResult));
        }),
      error => console.log(error)
    );
  };
}


export function deleteEmployeeData(empId) {
  console.log(empId);
  console.log(`http://dummy.restapiexample.com/api/v1/employees/${empId}`);
  return dispatch => {
    return (
      fetch(`http://dummy.restapiexample.com/api/v1/employees/${empId}`, {
        method: 'DELETE',
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          console.log(jsonResult)
          //dispatch(receivedEmpolyee(jsonResult));
        }),
      error => console.log(error)
    );
  };
}


export function upDateEmployeeData(empId, data) {
  console.log(empId, data);
  console.log(`http://dummy.restapiexample.com/api/v1/employees/${empId}`);
  return dispatch => {
    return fetch('http://dummy.restapiexample.com/api/v1/employees/' + empId, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
        })
        .then(jsonResult => {
          console.log(jsonResult)
          //dispatch(receivedEmpolyee(jsonResult));
    }).catch(err => err);
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
//======================End of Employee database==========================//
//============Shopping CART===PRODUCT ITEM Page==============================//
export function addProduct({id, title,desciption, price}){
  return{
    type:ADD_PRODUCT,
    payload:{id,title, desciption,price}
  }
}

export function updateProduct({id, title}){
  return{
    type:UPDATE_PRODUCT,
    payload:{id, title}
  }
}

//========================cart Action =====================================//
export function addToCart({id, title, description, price, productImage, units=1}) {
  return {
      type: ADD_TO_CART,
      payload: {id, title, description, price, productImage, units}
  }
}
export function deleteFromCart({id}) {
  return {
      type: DELETE_FROM_CART,
      payload: {id}
  }
}
export function updateItemUnits({id, units}) {
  return {
      type: UPDATE_ITEM_UNITS,
      payload: {id, units}
  }
}