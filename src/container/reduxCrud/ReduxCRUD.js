import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "../../action";
import { bindActionCreators } from "redux";
import "./ReduxCRUD.css";
import PostForm from "./postForm/PostForm";
import PostCard from "./postCard/PostCard";
import EditForm from "./editForm/EditForm";


class ReduxCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  
  }
    
  render() {
      const {posts} =this.props;
   //console.log(posts);
    return (
      <div className="container">
        <h1 className="redux-title">Redux Basic CRUD Application</h1>
        <div className="flex-main-row">
        <div className="flex-one">
        <PostForm/>
        </div>
        <div className="flex-two">
        {this.props.posts.map((item) => (
            <div key={item.id} >
                {item.editing ? <EditForm post={item} key={item.id} /> :
                    <PostCard key={item.id} post={item} />}
            </div>
        ))}
        </div>
       </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=> ({
  
   posts:state.posts
  
})

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
