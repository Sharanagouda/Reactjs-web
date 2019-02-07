import React, { Component } from 'react';
import {connect} from "react-redux";
import {selectBook} from "./../action";
import {bindActionCreators} from "redux";
// import BookDetatils from "./bookDetails";
// import AddNewBook from "./addNewBook";

class Dashboard extends Component {

  componentDidMount(){
    //this.props.getEmployee();
  }

  renderList(){
    return this.props.books.map((book)=>{
      return(
      <li key={book.id} onClick={()=>this.props.selectBook(book)}>{book.title}</li>);
    })
  }

  render() {
    const {selected} =this.props;
    console.log(selected)
    return (
      <div>
        <p>This is a landing home page</p>
        <ul >{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books:state.books,
    selectedBook:state.selectedBook.book
  }
}
    
  

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectBook:selectBook
  },dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
