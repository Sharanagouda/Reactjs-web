import React,{Component} from "react";
import {connect} from "react-redux"
import {link} from "react-router-dom";
import {Jombotran, Rrid, Row, Col, Image, Button} from "react-bootstrap";
import "./Contactme.css";

import CurrentLocation from "./CurrentLocation";
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state={
          name:'',
          contactno:'',
          email:'',
          subject:'',
          message:'',
          messageSuccess:false,
          }
          // binding this to event-handler functions

         
    }


    handleSubmit = (event) =>{
      event.preventDefault();
      const name = this.getName.value;
      const email = this.getEmail.value;
      const subject = this.getSubject.value;
      const message = this.getMessage.value;
  
      const data = {
          name,
          email,
          subject,
          message
      }
      this.setState({
        messageSuccess:true
      })
      console.log(data);
      event.target.reset()
  }

  render() {

      return (
        <div className="main-contact-div">
        <div className="contact-content-div">
            <h2>Contact Me</h2>
            <p>Want to get in touch with me? Sure, no problem – just fill in the form below.
            <br/>
            I’m currently offering free help via emails, so if you have some questions/problems – let me know about them.
            <br/>
            I check my email box once a day so you should get a reply within 24-48 hours. If not, re-send your question.
            <br/>
            P.S. If you have any blog setup questions,</p>
        </div>
        <div className="contact-map-maindiv">
        <div className="flex-one-form">
        <form onSubmit={this.handleSubmit}>
              <input required type="text" id="inputText" ref={(input)=>this.getName = input} placeholder="name" />
            
              <input required type="email" id="inputText" ref={(input)=>this.getEmail = input} placeholder="email" />
          
              <input required type="text" id="inputText" ref={(input)=>this.getSubject = input} placeholder="Subject" />
            
              <textarea type="text" required col="25" row="15" ref={(input) => this.getMessage = input} placeholder="Enter your message"/>
          
            <br/>
            <button>Submit</button>
        </form>
        <br/>
        {this.state.messageSuccess==true ? <div className="messageSuccess-Div"><p className="successText">Thanks for reaching out to me. I'll be in contact as soon as possible!</p></div>:''}
        </div>
        <div className="flex-two">
        <p>Find me on Google Map</p>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6305400162432!2d77.689151314856!3d12.93145121925675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1341346f52ad%3A0x8bb37eec68e07ef6!2sPhoton+Interactive+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1551188820304" width="600" height="450"  allowfullscreen></iframe>
        </div>
      </div>
                
    </div>
    );
 
    }
}



export default ContactMe;
