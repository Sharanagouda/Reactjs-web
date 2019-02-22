import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3,
        employeeData:this.props.employees,
       
          data: 'Initial data...'}
       this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
updateState(e) {
   this.setState({data: e.target.value});
}

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  
  render() {

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
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        
          <h2>News</h2>
          <input type = "text" value = {this.state.data}  placeholder={this.state.data}
          onChange = {this.updateState} />
       <h4>{this.state.data}</h4>
          <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        
        </ul>
        </div>
    );
  }
}