import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../../action";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./MyWork.css"

class MyBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [
        { id: 1, topic: "React CURD Application", postedDate: "05/02/2019", linktoScreen:"/reactcrud",demoImage:"assets/curdWebApp.png"},
        { id: 2, topic: "React-Redux Bacic CURD Application", postedDate: "08/02/2019", linktoScreen:"/reduxCrudOperation",demoImage:"assets/reduxbasicCrurd.png"},
        { id: 3, topic: "Weather API Integration", postedDate: "12/02/2019", linktoScreen:"/weatherapi",demoImage:"assets/weatherinfo.png"},
        { id: 4, topic: "Mini shopping Cart", postedDate: "14/02/2019", linktoScreen:"/shoppingCart",demoImage:"assets/shoppingcart.png"},
        { id: 5, topic: "Facebook Integration", postedDate: "13/02/2019", linktoScreen:"/reactReduxCrud",demoImage:"assets/curdWebApp.png"},
        { id: 6, topic: "React-Redux CURD Application", postedDate: "13/02/2019", linktoScreen:"/reactReduxCrud",demoImage:"assets/curdWebApp.png"},
        { id: 7, topic: "My Portfolio", postedDate: "12/02/2019", linktoScreen:"https://sharanagouda.github.io/",demoImage:"assets/curdWebApp.png"},
      ],
    };
    this.handleEditData = this.handleEditData.bind(this);
    this.handleDeleteData = this.handleDeleteData.bind(this);
  }

  handleEditData = userDetails => {
   
    console.log("handle edit")
  };

  // Delete data
  handleDeleteData = index => {
    console.log("handle delete");

  };

  navigatePage(item){
    console.log(item);
    
  }

  renderList() {
    return this.state.usersData.map(item => {
      return (
        <div className="flex-topic" key={item.id} onClick={() => this.props.selectBook(item)} >
          <li style={{ listStyleType: "none" }}>
            <Link to={item.linktoScreen} href={item.linktoScreen}>
            <div className="list-view">
              <div className="topic-ImageDiv">
                 <Image src={item.demoImage} className="topic-Image" />
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
      <div>
        <ul>{this.renderList()}</ul>
        <a href="https://sharanagouda.github.io/">
        <ul>
          <li style={{ listStyleType: "none" }}>
            <div className="flex-topic" onClick={() => this.props.selectBook()} >
              <div className="list-view">
                <div className="topic-ImageDiv">
                  <Image src={"assets/gitprofile.png"} className="topic-Image" />
                  <div className="topic-content">
                      <p className="topic-name">My Portfolio in github</p>
                      <p className="posted-date">Posted on : 12/02/2019</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    selectedBook: state.selectedBook,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectBook: selectBook,
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBlog);
