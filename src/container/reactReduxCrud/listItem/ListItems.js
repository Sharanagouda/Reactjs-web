import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getALLEmployee,  } from "../../../action";
import { bindActionCreators } from "redux";
import "./ListItems.css";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //employeeDataBase:[],
        currentPage: 1,
        todosPerPage: 100,
        employeeDataBase:this.props.userApiData
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount=()=>{
    this.props.handleGetEmployeeData();
  }
 

  // so default is this style:
editBtnStyle = {
  backgroundColor: '#008CBA',
  color:'white'
}
// so default is this style:
deleteBtnStyle = {
  backgroundColor: '#f44336',
  color:'white'
}

  renderList(){
    if(this.props.userApiData){
        return(
          <table>
        <thead>
            <tr>
                <th>Emp Id</th>
                <th>Emp name</th>
                <th></th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          
            {this.props.userApiData.map((item,i)=>{
                return(
                  <tr key={i} style={{ backgroundColor:"#FFF", paddingBottom:"10px" }}>
                  <td>{item.id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_age}</td>
                  <td>{item.employee_salary}</td>
                  <td>
                      <button onClick={()=>this.props.handleUpdateData()}   style={this.editBtnStyle} className="button muted-button">Edit</button>
                      &nbsp;&nbsp;&nbsp; 
                      <button onClick={()=>this.props.handleDeleteData()}   style={this.deleteBtnStyle} className="button muted-button">Delete</button>
                  </td>
                  </tr>
                  
                )
            })
                  }
            </tbody>
    </table>
        )
        
    }else{
        return(
            <div className="no-news">
                <p> No datas found </p>
            </div>
        )
    }
    
  
}

    
  render() {
    const { userApiData } = this.props;
    
    return (
      <div className="list-container">
        {this.renderList()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      userApiData: state.employees.payload

  }
}


const mapDispatchToProps= (dispatch)=> ({
  handleGetEmployeeData : () =>dispatch(getALLEmployee())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
