import React from "react";
import "./Weather.css"

const Weather = props =>(
      <div className="weather__info">
        {
          props.city && props.country &&  <p className="weather__key">Location:
          <span className="weather__value">&nbsp;{props.city}, {props.country}</span>
          </p>
        }
        {
          props.temperature && <p className="weather__key">Temperature:  
          <span className="weather__value"> &nbsp;&nbsp;{props.temperature}</span>
          </p>
        }
        {
          props.humidity &&  <p className="weather__key">Humidity: 
          <span className="weather__value">&nbsp;&nbsp; {props.humidity}</span>
          </p>
        }
        {
          props.description &&  <p className="weather__key">Conditions: 
          <span className="weather__value">&nbsp;&nbsp; {props.description}</span>
          </p>
        }
        {
          props.error &&  
          <p className="weather__key">
            <span className="weather__error">{props.error}</span>
          </p>
        }
      </div>
    );


export default Weather;
