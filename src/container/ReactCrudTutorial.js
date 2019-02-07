import React, { Component } from 'react';
import {connect} from "react-redux";
import {selectBook,getALLEmployee} from "../action";
import {bindActionCreators} from "redux";

class ReactCrudTutorial extends Component {

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

export default connect(mapStateToProps,mapDispatchToProps)(ReactCrudTutorial);
