import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getDataFromApi,  } from "../../../action";
import { bindActionCreators } from "redux";
import "./ListItems.css";

class TopNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
   
  }
  componentDidMount=()=>{
    this.props.handleGetApiData();
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
                  <td>{item.name}</td>
                        <td>{item.body}</td>
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
                <p> Click on any news Channel</p>
            </div>
        )
    }
    
  
}
    
  render() {
    //const { userApiData } = this.props;
    //console.log(userApiData);
    return (
      <div className="list-container">
        {this.renderList()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      userApiData: state.apiData.payload
  }
}


const mapDispatchToProps= (dispatch)=> ({
  handleGetApiData : () =>dispatch(getDataFromApi())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNews);
