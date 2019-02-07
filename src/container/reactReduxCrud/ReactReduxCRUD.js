import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "../../action";
import { bindActionCreators } from "redux";
import "./ReactReduxCRUD.css";

class ReactReduxCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3,
        employeeData:this.props.employees
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount=()=>{
    this.props.getALLEmployee();
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

    
  render() {
    const { employees } = this.props;
    console.log(this.props.employees)

    const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          });
    return (
      <div className="container">
        <h1 className="redux-title">CRUD Application Using Redux</h1>
        <div>
        <div>
        <table>
        <thead>
            <tr>
                <th>Emp Id</th>
                <th>Emp name</th>
                <th>Actions </th>
            </tr>
        </thead>
        <tbody>
        {employees>0?(
          employees.map(user=>(
              <tr key={user.id} index={user.id}>
              <td>{user.employee_name}</td>
              <td>{user.id}</td>
              <td>
                  <button onClick={()=>this.props.handleUpdateData({user,edit:true})}   style={this.editBtnStyle} className="button muted-button">Edit</button>
                  &nbsp;&nbsp;&nbsp; 
                  <button onClick={()=>this.props.handleDeleteData(user)}   style={this.deleteBtnStyle} className="button muted-button">Delete</button>
              </td>
          </tr>
          ))
      ) : (
          <tr>
              <td>No Users found</td>
          </tr>
      )

      }
           
        </tbody>
    </table>
        </div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        
        </ul>
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
)(ReactReduxCrudOperation);
