import React, { Component } from "react";
import { Jombotran, Container, Rrid, Row, Col, Image, Button } from "react-bootstrap";
import "./Card.css"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      var style = {
          backgroundImage: 'url(' + this.props.image + ')',
          height: "200px",
          margintop: "-10px"
      };
      var styleForTitle={
          padding: "10px",
      }
    return (
      <div>
        <header style={styleForTitle} className="card-header-for-title">
            <h5 className="card-header--title">{this.props.title}</h5>
        </header>
        <header style={style} className="card-header">
          <h4 className="card-header-category">{this.props.category}</h4>
        </header>
        <div className="card-body">
          <p className="date">Published On: {this.props.publishedOn}</p>
          <p className="card-description">{this.props.description}</p>
          <p className="body-content">{this.props.content}</p>
        </div>
            <a href={this.props.url} style={{ color: "blue",paddingLeft:"20px", fontSize: 15, }}>
          Read more
        </a>
      </div>
    );
  }
}

export default Card;