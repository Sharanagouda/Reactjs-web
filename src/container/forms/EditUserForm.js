import React, {Component, useState} from "react";
import "./EditUserForm.css";

class EditUserForm extends Component{
    constructor(props){
        super(props);
        this.state={
                id:this.props.usersData.id,
                name:this.props.usersData.name,
                contactno:this.props.usersData.contactno
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
     const { id, name,  contactno } = this.state
     const user = {id, name, contactno};
    console.log(` ${id} A first name was submitted: ${name}. An age was submitted: ${contactno}`)
    if (!id || !name || !contactno) return
     this.props.handleUpdateData({user, edit:false});
      }}>
        <label>
          Name:
          <input type="text" value={this.state.name} ref={(input) => this.input = input} onChange={this.handleNameChange}/>
        </label>
        <label>
          Contact no:
          <input type="number" value={this.state.contactno} ref={(input) => this.input = input} onChange={this.handleContactNoChange}/>
        </label>
        <input type="submit" value="Update Details" />
      </form>
    );
  }
}
export default EditUserForm;