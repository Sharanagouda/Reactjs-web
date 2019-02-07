import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "../../action";
import { bindActionCreators } from "redux";
import "./ReduxCRUD.css";
import PostForm from "./postForm/PostForm";


class ReduxCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  
  }
    
  render() {
   
    return (
      <div className="container">
        <h1 className="redux-title">Redux Basic CRUD Application</h1>
       <PostForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCrudOperation);
