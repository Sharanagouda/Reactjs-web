import React, { Component } from 'react';
import {connect} from "react-redux";
import {selectBook,getALLEmployee} from "../action";
import {bindActionCreators} from "redux";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class ReactCrudTutorial extends Component {
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
    }
     this.onMarkerClick = this.onMarkerClick.bind(this);
          this.onClose = this.onClose.bind(this);
  }

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
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,

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
    const {getALLEmployee} =this.props;
    console.log(getALLEmployee);
     const style = {
      width: '40vw',
      height: '50vh',
    }
    return (
      <div>
        <p>This is a landing home page</p>
        <ul >{this.renderList()}</ul>
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

export default GoogleApiWrapper({
  api: "AIzaSyDRSyf5j6apjMq6TxkTb3A8B3xds99tnwU"
})(ReactCrudTutorial);
