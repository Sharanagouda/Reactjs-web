import React, { Component } from 'react';
import "./PostForm.css"
import {connect} from "react-redux";
import {postNewData} from "../../../action";

class PostForm extends Component {
constructor(props){
    super(props);
    this.state={

    };
}
handleSubmit = (e) =>{
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
        id:new Date(),
        title,
        message
    }
    //console.log(data);
    this.props.handlePostNewData(data);
   
    e.target.reset()
}


render() {
return (
<div>
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Title" /><br /><br />
   <textarea required rows="4" cols="28" ref={(input)=>this.getMessage= input} placeholder="Enter Message" /><br /><br />
   <button>Post details</button>
  </form>
</div>
);
}
}
const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) =>({
    handlePostNewData : (data) => dispatch(postNewData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);