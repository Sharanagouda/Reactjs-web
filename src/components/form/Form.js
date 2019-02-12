import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Form.css"

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const city = this.getCity.value;
    const country = this.getCountry.value;

    const data = {
        city,
        country,
    }
    this.props.getWeather(data);
    //this.props.handleUpdateEmployeeData(this.props.employee.id, data);
    e.target.reset()
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-main-div">
      <input required type="text" ref={(input)=>this.getCity = input} placeholder="city" />
      <input required type="text" ref={(input)=>this.getCountry = input} placeholder="country" />
      <button>Get Weather</button>
      </div>
     </form>
    );
  }
}


export default FormComponent;
