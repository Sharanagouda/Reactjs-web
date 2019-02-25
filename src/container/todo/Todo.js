import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Todo.css";


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todoList: [
            "todo item one",
            "todo item two",
            "todo item three"
          ]
    };
    this.handleSubmit=  this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    var list = this.state.todoList;
    console.log(list)
    const newItem = this.getNewData.value;
    console.log(newItem);

    // If our input has a value
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        todoList: list
      });
      // Finally, we need to reset the form
      e.target.reset()
   
  }
    
  render() {
      const {posts} =this.props;
   //console.log(posts);
    return (
        <div className="content">
            <p className="main-title">Todo App</p>
            <div className="container">
            <section className="section">
                <ul>
                {this.state.todoList.map(item => (
                    <li key={item} className="list-item">{item}</li>
                ))}
                </ul>
            </section>
            <hr />
            <section className="section">
              <form className="form" id="addItemForm" onSubmit={this.handleSubmit}>
              <input type="text" 
              ref={(input)=>this.getNewData = input} 
              type="text"
              className="input"
              id="addInput"
              placeholder="Something that needs ot be done..."/><br /><br />
                <button className="button is-info">
                  Add Item
                </button>
              </form>
            </section>
            </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=> ({
   posts:state.posts
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
