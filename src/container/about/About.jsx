import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-div">
      <Image src="assets/mountain-man.jpg" className="header-image" />
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/sharan.jpeg" className="about-profile-pic" rounded />
            <h3>Sharanagouda K</h3>
            <p>Hey there, I’m Sharanagouda K. I’m a software engineer in the Bangalore city. <br/>
               These days I build frontend UIs with React. A couple years ago it was Angular. Long ago,<br/>
               I work on mobile and web application.<br/>
               This blog contains my best answers to questions that UI developers struggle with.<br/>
               Most of the posts are about React or Angular, with a few other random things thrown in.
            </p>
            <p> spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.<br/>
                The secret to doing anything is believing that you can do it.<br/>
                Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.<br/>
                Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky.<br/>
                Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.<br/>
                Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun.<br/>
                If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. These trees are so much fun. I get started on them and I have a hard time stopping.</p>
          </Col>
        
      </div>
    )
  }
}
