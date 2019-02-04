import React, {Component, useState} from "react";
import "./EditUserForm.css";

class EditUserForm extends Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                contactno:''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactNoChange = this.handleContactNoChange.bind(this);
        this.handleUpdateData = this.handleUpdateData.bind(this);
        console.log("dh")
    }


  handleNameChange(event){
      const name = event.target.value
    this.setState({ name: name })
  }
  handleContactNoChange(event){
      const contactno = event.target.value
    this.setState({ contactno: contactno })
  }
//Update Data
        handleUpdateData = (updatedData) => {
            console.log(updatedData.edit)
            console.log(updatedData.user)
            this.setState({
                edit:updatedData.edit
            })
            // const oldArray = this.state.usersData;
            // const updatedArray = {
            //     id:this.state.usersData.length+1,
            //     name:updatedData.name,
            //     contactno:updatedData.contactno
            // }
            // this.setState({
            //     usersData:[...this.state.usersData, updatedArray]
            // })
        }

  render() {
    return (
      <form onSubmit={event=>{
           event.preventDefault();
     const { name,  contactno } = this.state
     const userData = {name, contactno};
     //alert(JSON.stringify(userData));
    console.log(`A first name was submitted: ${name}. An age was submitted: ${contactno}`)
    if (!name || !contactno) return
     this.props.handleUpdateData(userData);
      }}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} onChange={this.handleNameChange}/>
        </label>
        <label>
          Contact no:
          <input type="text" ref={(input) => this.input = input} onChange={this.handleContactNoChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EditUserForm;