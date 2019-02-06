import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "./../../action";
import { bindActionCreators } from "redux";
import "./ReactReduxCRUD.css";

class ReactReduxCrudOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

    
  render() {
    const { employees } = this.props;
    console.log(employees);
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
