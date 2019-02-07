import React, { Component } from 'react';
import {connect} from "react-redux";
import {selectBook,getALLEmployee} from "../action";
import {bindActionCreators} from "redux";
import BookDetatils from "./bookDetails";
import AddNewBook from "./addNewBook";

class LandingPage extends Component {

  componentDidMount(){
    this.props.getALLEmployee();
    //console.log(employee)
  }

  renderList(){
    return this.props.books.map((book)=>{
      return(
      <li key={book.id} onClick={()=>this.props.selectBook(book)}>{book.title}</li>);
    })
  }

  render() {
    const {getALLEmployee} =this.props;
    console.log(getALLEmployee);
    return (
      <div>
        <p>This is a landing home page</p>
        <ul >{this.renderList()}</ul>
        <BookDetatils/>
        <AddNewBook/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books:state.books,
    selectedBook:state.selectedBook
  }
}
    
  

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectBook:selectBook,
    getALLEmployee:getALLEmployee
  },dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);
