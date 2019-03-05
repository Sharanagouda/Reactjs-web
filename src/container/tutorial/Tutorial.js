import React,{Component} from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import "./TutorialStyle.css";

class Tutorial extends Component{
    constructor(props) {
        super(props);
        
        this.state = { 
           data: 0,
           usersData: [
            { id: 1, topic: "ES6 Tutorial", postedDate: "05/02/2019", linktoScreen:"/es6", demoImage:"assets/es6Tutorial.jpg"},
            { id: 2, topic: "Tutorial to Create  React-Redux CURD Application", postedDate: "10/02/2019", linktoScreen:"/reactcurdTutorial",demoImage:"assets/curdWebApp.png"},
            { id: 3, topic: "React Redux Interview Questions", postedDate: "12/02/2019", linktoScreen:"/news",demoImage:"assets/curdWebApp.png"},
            { id: 1, topic: "Tutorial to Create React CURD Application", postedDate: "05/02/2019", linktoScreen:"/news",demoImage:"assets/curdWebApp.png"},
          ],
        
        }
     };
     renderList() {
      return this.state.usersData.map(item => {
        return (
          <div className="tutorial-topic" key={item.id} >
            <li style={{ listStyleType: "none" }}>
              <Link to={item.linktoScreen} href={item.linktoScreen}>
              <div className="list-view">
                <div className="topic-ImageDiv">
                {item.demoImage ?   <Image src={item.demoImage } className="topic-Image" /> :    <Image src={"assets/defaultImage.jpg" } className="topic-default-Image" /> }
                
                   <div className="topic-content">
                      <p className="topic-name">{item.topic}</p>
                      <p className="posted-date">Posted on : {item.postedDate}</p>
                   </div>
                </div>
              </div>
              </Link>
            </li>
          </div>
        );
      });
    }
     render() {
        return (
            <div className="tutorial-main-div">
            <h2 style={{textAlign:"center"}}>Welcome to Tutorial  </h2>
            <p style={{textAlign:"center"}}>I have added some usefull Tutorial on react</p>
            <ul>{this.renderList()}</ul>
          </div>
        );
     }
  }
export default Tutorial;
