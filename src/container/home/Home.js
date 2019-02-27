import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import ContactFrom from "./../forms/ContactForm"
var image_url = "assets/mountain.jpeg"
export default class Home extends Component {
    render() {
        return (
            <div className="main-home-div">
            <div className="content-div" style={{ backgroundImage : `url(${image_url})` }}>
            <h2 style={{}} className="fontHeader">Front end Developer </h2>
            {/*<p style={{}} className="fontPersonText">Person</p>*/}
            <a href="#cform" className="buttonTitle"> Hire Me</a>
            </div>
           <div className="main-work-div">
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FF0", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
            <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FF0", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
         <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FFF", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
            <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FFF", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
            <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#000", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
            <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
            <div  className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FFF", paddingBottom:"10px",display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between" }}>
            <div className="work-div" >
                <Image src="assets/weatherinfo.png"  className="workImages" />
            <p className="workedTechnology">
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.</p>
            </div>
            </div>
    </div>
    <div className="form-div-inHome" id="cform">
    <ContactFrom/>
    </div>
        </div>
        )
    }
}
