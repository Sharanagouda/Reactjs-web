import React,{Component} from "react";
import {connect} from "react-redux"
import {link} from "react-router-dom";
import {Jombotran, Rrid, Row, Col, Image, Button} from "react-bootstrap";
import "./Contactme.css";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import CurrentLocation from "./CurrentLocation";

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state={
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          currentLocation:{
            lat :'',
            long: ''
          },
          name:'',
          contactno:'',
          email:'',
          subject:'',
          message:'',
          messageSuccess:false
          }
          // binding this to event-handler functions
          this.onMarkerClick = this.onMarkerClick.bind(this);
          this.onClose = this.onClose.bind(this);
    }

    handleSubmit = (event) =>{
      event.preventDefault();
      const name = this.getName.value;
      const contactno = this.getContactNo.value;
      const email = this.getEmail.value;
      const subject = this.getSubject.value;
      const message = this.getMessage.value;
  
      const data = {
          name,
          email,
          contactno,
          subject,
          message
      }
      this.setState({
        messageSuccess:true
      })
      console.log(data);
      event.target.reset()
  }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
              this.setState({
                currentLocation:{
                lat: coords.latitude,
                lng: coords.longitude
              }
              })
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


    static defaultProps = {
      center: { lat: 12.9323895, lng: 77.6936836 },
      zoom: 11
    }
  render() {
    const style = {
      width: '40vw',
      height: '50vh',
    }

      return (
        <div className="main-contact-div">
        <div className="contact-content-div">
            <h2>Contact Me</h2>
            <p>Want to get in touch with me? Sure, no problem – just fill in the form below.
            <br/>
            I’m currently offering free help via emails, so if you have some questions/problems – let me know about them.
            <br/>
            I check my email box once a day so you should get a reply within 24-48 hours. If not, re-send your question.
            <br/>
            P.S. If you have any blog setup questions,</p>
        </div>
        <div className="contact-map-maindiv">
        <div className="flex-one-form">
        <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input required type="text" id="inputText" ref={(input)=>this.getName = input} placeholder="name" />
            </label>
            <label>
              Your Email
              <input required type="email" id="inputText" ref={(input)=>this.getEmail = input} placeholder="email" />
            </label>
            <label>
              Contact no (optional):
              <input type="number" pattern="[0-9]*" ref={(input) => this.getContactNo = input} placeholder="Contact no"/>
            </label>
            <label>
              Subject
              <input required type="text" id="inputText" ref={(input)=>this.getSubject = input} placeholder="Subject" />
            </label>
            <label>
              Your Message
              <textarea type="text" required col="25" row="15" ref={(input) => this.getMessage = input} placeholder="Enter your message"/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
        <br/>
        {this.state.messageSuccess==true ? <div className="messageSuccess-Div"><p className="successText">Message sent</p></div>:''}
        </div>
        <div className="flex-two">
        <p>Find me on Google Map</p>
        <Map
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={{
        lat: 12.9323895,
        lng: 77.6936836
        }}
      >
          <Marker
          onClick={this.onMarkerClick}
          name={'Photon infotech net'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
       </Map>
        </div>
      </div>
                
    </div>
    );
 
    }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({

});

export default GoogleApiWrapper({
  api: "AIzaSyDRSyf5j6apjMq6TxkTb3A8B3xds99tnwU"
})(ContactMe)
