import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "./../action";
import { bindActionCreators } from "redux";

class MyBlog extends Component {
  componentDidMount() {
    this.props.getALLEmployee();
    //console.log(employee)
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.id} onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <div>
        <p>This is a Work page</p>
        <ul>{this.renderList()}</ul>
        <a href="/reactcrud" >React Crud Operation</a>
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
)(MyBlog);
