import React, {Component, useState} from "react";
import "./AddUserForm.css";

class AddUserForm extends Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                contactno:''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactNoChange = this.handleContactNoChange.bind(this);
    }


  handleNameChange(event){
      const name = event.target.value
    this.setState({ name: name })
  }
  handleContactNoChange(event){
      const contactno = event.target.value
    this.setState({ contactno: contactno })
  }

  render() {
    return (
      <form onSubmit={event=>{
      event.preventDefault();
     const { name,  contactno } = this.state
     const userData = {name, contactno};
    if (!name || !contactno) return
     this.props.handleEditData(userData);
     event.target.reset();
      }}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} onChange={this.handleNameChange}/>
        </label>
        <label>
          Contact no:
          <input type="number" pattern="[0-9]*" ref={(input) => this.input = input} onChange={this.handleContactNoChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AddUserForm;