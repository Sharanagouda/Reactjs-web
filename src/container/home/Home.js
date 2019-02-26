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
            <h2 style={{}}>Front end Developer </h2>
            <p style={{}}>Person</p>
            <button ><a href="#cform" className="buttonTitle"> Hire Me</a></button>
            </div>
               
           

         
          <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/sharan.jpeg" circle className="profile-pic" />
                    <h3>Sharan</h3>
                    <p>
                        That's a crooked tree. We'll send him to Washington. These
                        little son of a guns hide in your brush and you just have to
                        push them out.
            </p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/sharan.jpeg" circle className="profile-pic" />
                    <h3>sharanagouda</h3>
                    <p>
                        That's a crooked tree. We'll send him to Washington. These
                        little son of a guns hide in your brush and you just have to
                        push them out.
            </p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/sharan.jpeg" circle className="profile-pic" />
                    <h3>Sharan</h3>
                    <p>
                        That's a crooked tree. We'll send him to Washington. These
                        little son of a guns hide in your brush and you just have to
                        push them out.
            </p>
                </Col>
    </Row>
    <div className="form-div-inHome" id="cform">
    <ContactFrom/>
    </div>
        </div>
        )
    }
}
