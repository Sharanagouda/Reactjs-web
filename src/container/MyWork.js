import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, getALLEmployee } from "./../action";
import { bindActionCreators } from "redux";
import "./MyWork.css"
class MyBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [
        { id: 1, topic: "React CURD Application", date: "05/02/2019", linktoScreen:"/reactcrud"},
        { id: 2, topic: "React-Redux CURD Application", date: "10/02/2019", linktoScreen:"/reactcrud"},
        { id: 3, topic: "Weather API Integration", data: "12/02/2019", linktoScreen:"/reactcrud"}
      ],
    };
    this.handleEditData = this.handleEditData.bind(this);
    this.handleDeleteData = this.handleDeleteData.bind(this);
  }

  handleEditData = userDetails => {
   
    console.log("handle edit")
  };

  // Delete data
  handleDeleteData = index => {
    console.log("handle delete")
  };

  componentDidMount() {
    this.props.getALLEmployee();
    //console.log(employee)
  }

  renderList() {
    return this.state.usersData.map(item => {
      return (
        <div className="flex-topic" key={item.id} onClick={() => this.props.selectBook(item)} >
        <li style={{ listStyleType: "none" }}>
        <div >
        <a href={item.linktoScreen}>{item.topic}</a>
        </div>
        </li>
        </div>
      );
    });
  }

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <div>
        <ul>{this.renderList()}</ul>
        
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
