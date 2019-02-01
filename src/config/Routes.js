import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "../container/Home";
import About from "../container/About";
import News from "../container/News";
import Navbar from "../container/CustomNavbar";
import ContactMe from "../container/ContactMe";
import Tutorial from "../container/Tutorial";
import MyWork from "../container/MyWork";
import LatestNews from "../container/NewsPaper"; 
import Footer from "../container/Footer";

const PageNotFound =()=>(<div><p>404 PageNotFound</p></div>)

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/myblog" exact component={MyWork} />
          <Route path="/news" exact component={News} />
          <Route path="/tutorial" exact component={Tutorial} />
          <Route path="/latestNews" exact component={LatestNews} />
          <Route path="/contactme" exact component={ContactMe} />
          <Route component={PageNotFound} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default Routes;
