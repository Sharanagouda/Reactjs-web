import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-div">
        <div className="container" style={{minHeight:'750px'}}>
          <section className="section">
            <div className='headshot' id='animate-img'>
              <img src="assets/sharan.jpeg" alt='sharanagouda' className="about-profile-pic"/>
            </div>
          </section>
          <br/>
          <section className="section">
            <div className="columns">
              <div className="column info">
                <p className='is-size-3'>Hey there!</p>
                <p>My name is Sharanagouda K and I'm a front end web developer. I build responsive websites using modern technologies like React, Angular, Git, as well as good old jQuery. I also have experience with Ionic framework.<br/><br/>This blog contains my best answers to questions that UI developers struggle with.<br/>
               Most of the posts are about React or Angular, with a few other random things thrown in.<br/><br/>Although I'm a front end developer I like challenges of all sorts so if you are looking for someone to work with, use the fancy contact form to get in touch!</p>
                {/*<a href="http://iamtimsmith.com/TimSmith_resume.pdf" target="_blank" className="button" style={{marginTop:'20px'}}>My Resume</a>*/}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
