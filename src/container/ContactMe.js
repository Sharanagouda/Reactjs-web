import React,{Component} from "react";
import {connect} from "react-redux"
import {link} from "react-router-dom";
import {Jombotran, Rrid, Row, Col, Image, Button} from "react-bootstrap";

class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    async componentDidMount() {
        const { lat, lng } = await this.getcurrentLocation();
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location: {
              lat,
              lng
            }
          },
          currentLocation: {
            lat,
            lng
          }
        }));
      }
    
       getcurrentLocation() {
        if (navigator && navigator.geolocation) {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              console.log(coords.latitude,coords.longitude)
              resolve({
                lat: coords.latitude,
                lng: coords.longitude
              });
           
            });
          });
        }
        return {
          lat: 0,
          lng: 0
        };
      }
 addMarker = (location, map) => {
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        location
      }
    }));
    map.panTo(location);
  };

    render(){
        return(
            <div>
            <p>Contact me Page</p>
            </div>
        )
    }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateToProps,mapDispatchToProps)(ContactMe);
