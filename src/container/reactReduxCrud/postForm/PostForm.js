import React, { Component } from 'react';
import "./PostForm.css"
import {connect} from "react-redux";
import {postEmployeeData, upDateEmployeeData} from "../../../action";

class PostFormForReduxApiCurd extends Component {
constructor(props){
    super(props);
    this.state={

    };
}
handleSubmit = (e) =>{
    e.preventDefault();
    const name = this.getName.value;
    const salary = this.getSalary.value;
    const age = this.getAge.value;

    const data = {
        name,
        salary,
        age
    }
    this.props.handleEmployeeNewData(data);
    //this.props.handleUpdateEmployeeData(this.props.employee.id, data);
    e.target.reset()
}


render() {
return (
<div className="form-container">
  <h1>Add Employee details</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getName = input} placeholder="Name" />
   <input required type="text" ref={(input)=>this.getAge = input} placeholder="Age" />
   <input required type="text" ref={(input)=>this.getSalary = input} placeholder="Salary" />
   <br />
   <button>Post details</button>
  </form>
</div>
);
}
}
const mapStateToProps = (state) =>({
empid:state.employees
})

const mapDispatchToProps = (dispatch) =>({
    handleEmployeeNewData : (data) => dispatch(postEmployeeData(data)),
    handleDeleteData : (empId,data) =>dispatch(upDateEmployeeData(empId,data))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostFormForReduxApiCurd);