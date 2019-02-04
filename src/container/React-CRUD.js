import React, { Component,useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "./../action";
import { bindActionCreators } from "redux";
import "./React-CRUD.css"
import UserTable from "./table/UserTable"
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";


class ReactCrudOperation extends Component {
    constructor(props){
       super(props);
       this.state={
        usersData : [
        { id: 1, name: 'sharan', contactno: '9876543210' },
        { id: 2, name: 'Devid', contactno: '1236547890' },
        { id: 3, name: 'Boss', contactno: '1245789630' },
        ],
        edit:false
  };
        this.handleEditData = this.handleEditData.bind(this);
        this.handleDeleteData = this.handleDeleteData.bind(this);
        this.handleUpdateData = this.handleUpdateData.bind(this);
 }

//Create a new Data
    handleEditData= (userDetails)=>{
        const oldArray = this.state.usersData;
        const newArray = {
            id:this.state.usersData.length+1,
            name:userDetails.name,
            contactno:userDetails.contactno
        }
       this.setState({
           usersData:[...this.state.usersData, newArray]
       })
        console.log(JSON.stringify(this.state.usersData));
      } 
  
// Delete data
        handleDeleteData=(userId)=>{
            this.setState({
                usersData: this.state.usersData.filter((item, i) => i !== userId-1)
            });
        }
 
 //Update Data
 //https://www.taniarascia.com/crud-app-in-react-with-hooks/
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
     <div className="container">
			<h1>CRUD Application</h1>
			<div className="flex-row">
				<div className="flex-one">
               {this.state.edit ?
                (  <div><h2>Edit user</h2>
                    <EditUserForm/>
                    </div>) : (
                    <div><h2>Add user</h2>
                    <AddUserForm handleEditData={this.handleEditData}/></div>
                )}
					
				</div>
				<div className="flex-two">
					<h2>View users</h2>
                    <UserTable user={this.state.usersData} handleDeleteData={this.handleDeleteData} handleUpdateData={this.handleUpdateData}/>
				</div>
			</div>
		</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    selectedBook: state.selectedBook,
    employees: state.employees.payload
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectBook: selectBook,
      getALLEmployee: getALLEmployee
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactCrudOperation);
