import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
  render(){
    return(

        <div>
         <footer style={footer}>
         © Copyright 2019 Sharanagouda K. All rights reserved 
         </footer>  

        </div>
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
    padding : "10px"

}
export default Footer;