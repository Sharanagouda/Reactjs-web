import React, { Component } from 'react';
import "./ContactForm.css"
import {connect} from "react-redux";
import {Image, Button} from "react-bootstrap";

class ContactForm extends Component {
constructor(props){
    super(props);
    this.state={
    messageSuccess:false
    };
}
handleSubmit = (e) =>{
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const message = this.getMessage.value;
    const data = {
        id:new Date(),
        name,
        email,
        message
    }
    this.setState({
        messageSuccess:true
    })
    console.log(data);
    
    e.target.reset()
}


render() {
return (
<div className="form-maindiv">
  <h1>Contact form</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" id="inputText" ref={(input)=>this.getName = input} placeholder="Name" />
   <input required type="email" id="inputText" ref={(input)=>this.getEmail = input} placeholder="Email" />
   <textarea type="text" required col="25" row="15" ref={(input) => this.getMessage = input} placeholder="your message"/>
   <button>Submit</button>
  </form>
   {this.state.messageSuccess==true ? <div className="messageSuccess-Div"><p className="successText">Thanks for reaching out to me.</p></div>:''}
</div>
);
}
}
const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) =>({
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);