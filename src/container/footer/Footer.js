import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
  render(){
    return(
         <footer style={footer}>
          <p> © Copyright 2019 Sharanagouda K. All rights reserved </p>
          <div className='container'>
            <ul className="social has-text-centered" style={{}}>
                <li><a href="https://www.facebook.com/sharanu.mk" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://in.linkedin.com/in/sharanagoudamk/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/Sharanagoudamk" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/Sharanagoudamk" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="http://codepen.io/sharanumk/" target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
            </ul>
            <ul className="has-text-centered" >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/myblog">Work</Link></li>
            </ul>
         </div>
         </footer>  
    );
  }
}

const footer={

    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#004165",
    color: "white",
    textAlign: "center",
    padding : "10px",

}
const container ={
  marginLeft:"-15px"
}
export default Footer;