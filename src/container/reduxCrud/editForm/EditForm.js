import React, {Component} from "react";
import {connect} from "react-redux";
import {UpdatePost} from "../../../action";
import "./EditForm.css";

class EditForm extends Component{

    handleSubmit = (e)=>{
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data ={
            newTitle,
            newMessage
        }
        this.props.handleUpdate(this.props.post.id, data);
    }


    render(){

        return(
            <div className="edit-post">
            <form onSubmit={this.handleSubmit}>
            <input required type="text" ref={(input) => this.getTitle = input} className="input-title" id="inputfield"
    defaultValue={this.props.post.title} placeholder="Enter Post Title" />
             <textarea required rows="5" cols="25" ref={(input)=> this.getMessage=input} className="input-title" placeholder="Enter Message"
             defaultValue={this.props.post.message} />
            <button>Update datas</button>
            </form>
            </div>
        )
    }
}
const mapStateToProps= (state)=>({

})

const mapDispatchToProps= (dispatch)=>({
handleUpdate:(newDataId, data)=>dispatch(UpdatePost(newDataId, data))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditForm);