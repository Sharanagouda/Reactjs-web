import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Home from "../container/home/Home";
import About from "../container/about/About";
import News from "../container/News";
import Header from "../container/customNavBar/CustomNavbar";
import ContactMe from "../container/contactme/ContactMe";
import Tutorial from "../container/tutorial/Tutorial";
import MyWork from "../container/work/MyWork";
import LatestNews from "../container/newsScreen/NewsPaper"; 
import Footer from "../container/footer/Footer";
import ReactCrudOperation from "../container/reactCrud/React-CRUD";
import ReactReduxCrudOperation from "../container/reactReduxCrud/ReactReduxCRUD";
import Dashboard from "../container/Dashboard.js";
import ReactCrudTutorial from "../container/ReactCrudTutorial";
import ReduxCrudOperation from "../container/reduxCrud/ReduxCRUD";
import WeatherAPI from "../container/weatherapi/WeatherAPI";
import ShoppingCart from "../container/shoppingCart/ShoppingCart";
import Todo from "../container/todo/Todo";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/myblog" exact component={MyWork} />
          <Route path="/news" exact component={News} />
          <Route path="/tutorial" exact component={Tutorial} />
          <Route path="/latestNews" exact component={LatestNews} />
          <Route path="/contactme" exact component={ContactMe} />
          <Route path="/reactcrud" exact component={ReactCrudOperation} />
          <Route path="/reactReduxCrud" exact component={ReactReduxCrudOperation}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/reactcurdTutorial" exact component={ReactCrudTutorial}/>
          <Route path="/reduxCrudOperation" exact component={ReduxCrudOperation} />
          <Route path="/weatherapi" exact component={WeatherAPI} title="Weather information"/>
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/todoApp" exact component={Todo} />
          <Route component={PageNotFound} />
          </Switch>
         <Footer/> 
        </div>
      </Router>
    );
  }
}

const PageNotFound =()=>(<div style={{marginTop:'75px'}}>
    <section className="section content has-text-centered" style={{minHeight:'750px'}}>
      <h1 style={{textAlign:"center"}}> #404 Page not found</h1>
      <p className='is-size-5' style={{borderTop:'1px solid #222', paddingTop:'20px', textAlign:"center"}}>Looks like you found a page that doesn't exist!</p>
      <p style={{textAlign:"center"}}>You can go back home by clicking <Link to='/'>here</Link>.</p>
    </section>
    <Footer />
  </div>)

export default Routes;
