import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./WeatherAPI.css"
import Form from "./../../components/form/Form";
import Weather from "./../../components/weather/Weather";
import Title from "./../../components/title/Title";

const API_KEY = "4d805dc8a9297495fa522552e1a265d9";


class WeatherAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
     temperature:undefined,
     city:undefined,
     country:undefined,
     humidity:undefined,
     description:undefined,
     error:undefined,
    };
  }

  getWeather = async (e) =>{

      const city = e.city;
      const country = e.country;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=matric`);
      const data = await api_call.json();
    //console.log(data);
  if(data.message !=="city not found" && (city && country)){

        this.setState({
            temperature:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error: "",
            correctCityError:data.message
        })

      }else{
        this.setState({
          temperature:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          description:undefined,
          error: "Please enter correct city & country"
      })
    } 
        //console.log(this.state.country, this.state.humidity,this.state.description);
  }


  render() {
    return (
      <div className="wrapper">
        <div className="main">
            <div className="row">
              <div className="col-xs-5 title-container">
                 <Title/>
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country} 
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
         
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  
  };
}

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
)(WeatherAPI);
