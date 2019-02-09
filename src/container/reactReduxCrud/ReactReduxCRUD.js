import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getDataFromApi,  } from "../../action";
import { bindActionCreators } from "redux";
import "./ReactReduxCRUD.css";
import ListItems from "./listItem/ListItems";
import PostFormForReduxApiCurd from "./postForm/PostForm";

class ReactReduxCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
   
  }
  componentDidMount=()=>{
  
  }
 

    
  render() {
   
    
    return (
      <div className="container">
      <h1 className="redux-title">Redux CRUD with RestFull Api Integration</h1>
      <div className="flex-main-row">
      <div className="flex-one">
      <PostFormForReduxApiCurd/>
      </div>
      <div className="flex-two">
            <ListItems/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
     
  }
}


const mapDispatchToProps= (dispatch)=> ({
 
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactReduxCrudOperation);
