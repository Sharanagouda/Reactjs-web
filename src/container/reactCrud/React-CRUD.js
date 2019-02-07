import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "./../../action";
import { bindActionCreators } from "redux";
import "./React-CRUD.css";
import UserTable from "./../table/UserTable";
import AddUserForm from "./../forms/AddUserForm";
import EditUserForm from "./../forms/EditUserForm";

class ReactCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [
        { id: 1, name: "sharan", contactno: "9876543210" },
        { id: 2, name: "Devid", contactno: "1236547890" },
        { id: 3, name: "Boss", contactno: "1245789630" }
      ],
      edit: false,
      oldUserData: [],
    };
    this.handleEditData = this.handleEditData.bind(this);
    this.handleDeleteData = this.handleDeleteData.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
  }

  //Create a new Data
  handleEditData = userDetails => {
    const newArray = {
      id: this.state.usersData.length + 1,
      name: userDetails.name,
      contactno: userDetails.contactno
    };
    this.setState({
      usersData: [...this.state.usersData, newArray]
    });
    console.log(JSON.stringify(this.state.usersData));
    
  };

  // Delete data
  handleDeleteData = index => {
    this.setState( {
      usersData: this.state.usersData.filter(i => i !== index)
    });
  };

  //Update Data
  //using React-hooks
  //https://www.taniarascia.com/crud-app-in-react-with-hooks/
  //https://taniarascia.github.io/primitive/css/main.css
    handleUpdateData = updatedData => {
        this.setState({
            edit: updatedData.edit,
            oldUserData: {
                id:updatedData.user.id,
                name:updatedData.user.name,
                contactno:updatedData.user.contactno}
    });

    const newArray = this.state.usersData;
    newArray[updatedData.user.id-1] = updatedData.user
      this.setState({
        usersData : newArray
      })
      console.log(this.state.usersData);
    };

    
  render() {
    return (
      <div className="container">
        <h1>CRUD Application</h1>
        <div className="flex-row">
          <div className="flex-one">
            {this.state.edit ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  edit={this.state.edit}
                  usersData={this.state.oldUserData}
                  handleUpdateData={this.handleUpdateData}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm handleEditData={this.handleEditData} />
              </div>
            )}
          </div>
          <div className="flex-two">
            <h2>View users</h2>
            <UserTable
              user={this.state.usersData}
              handleDeleteData={this.handleDeleteData}
              handleUpdateData={this.handleUpdateData}
            />
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
