import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return <div>
            <Jumbotron>
            <div >
            <h2 style={{textAlign:"center"}}>Welcome to myWebsite </h2>
            <p style={{textAlign:"center"}}>This is how to build a website with React, React-Router &  React-Bootstrap</p>
            
            </div>
               
            </Jumbotron>
          {/*  <Row className="show-grid text-center">
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
    </Row>*/}
        </div>
    }
}
