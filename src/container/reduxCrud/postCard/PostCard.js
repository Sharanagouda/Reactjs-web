import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteSelectedPost,editAndUpdatePost} from "../../../action"
import "./PostCard.css";

class Post extends Component {
constructor(props){
    super(props);
    this.state={

    }
}


    // so default is this style:
editBtnStyle = {
    backgroundColor: '#008CBA',
    color:'white'
}
// so default is this style:
deleteBtnStyle = {
    backgroundColor: '#f44336',
    color:'white'
}
deleteFunction(postId){
    this.props.handleDeleteData(postId);
}
editFunction(postId){
    this.props.handleUpdateData(postId);
}

  render() {
      const {post} = this.props;
  return (
    <div className="new-post">
        <p className="post-title">{post.title}</p>
        <p className="post-title">{post.message}</p>
        <button onClick={()=>this.editFunction(post.id)}   style={this.editBtnStyle} className="button muted-button">Edit</button>
        &nbsp;&nbsp;&nbsp; 
        <button onClick={()=>this.deleteFunction(post.id)}   style={this.deleteBtnStyle} className="button muted-button">Delete</button>
    </div>
  );
 }
}
const mapStateToProps = (state)=>({
    
})

const mapDispatchToProps = (dispatch)=>({
    handleDeleteData:(indexId)=>dispatch(deleteSelectedPost(indexId)),
    handleUpdateData: (postData) =>dispatch(editAndUpdatePost(postData))
})

export default connect(mapStateToProps,mapDispatchToProps)(Post);