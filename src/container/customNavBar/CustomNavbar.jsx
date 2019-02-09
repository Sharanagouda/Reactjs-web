import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <header style={header}>
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <Image src="assets/logo.png" className="logo-Image" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About Me
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/myblog"
              to="/myblog"
            >
              Work
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/latestNews"
              to="/latestNews"
            >
              News
            </NavItem>
            <NavItem
              eventKey={5}
              componentClass={Link}
              href="/tutorial"
              to="/tutorial"
            >
              Tutorial
            </NavItem>
            <NavItem
              eventKey={6}
              componentClass={Link}
              href="/contactme"
              to="/contactme"
            >
              Contact Me
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
    );
  }
}


const header={

  //position: "fixed",
  left: "0",
  top: "0",
  width: "100%",
  color: "white",

}
export default CustomNavbar;