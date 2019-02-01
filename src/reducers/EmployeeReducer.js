import {
  GET_EMPLOYEE,
  EDIT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from "./../actionType";

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        payload: action.payload
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default employeeReducer;
