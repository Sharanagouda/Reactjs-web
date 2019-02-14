import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./../../action";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {Col, Row, Grid} from "react-bootstrap";
import ProductItem from "./../../components/shoppingComponents/ProductItem";
import Cart from "./../../components/shoppingComponents/Cart";

import "./ShoppingCart.css"

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
       }
  };

  // Delete data
  dispatchAddToCart(product){
      console.log("shopping cart ",product)
   this.props.handleAddToCardProduct(product);

  };

  renderProducts() {
    return this.props.products.map(item => {
      return (
        <Col className="productList" xs={12} sm={6} md={4} key={item.id}>
            <ProductItem handleOnAdd={this.dispatchAddToCart.bind(this)} product={item}/>
        </Col>
      );
    });
  }

  render() {
      const {products} =this.props;
      //console.log(products);
    return (
      <div >
        <h1>Welcome to Mini Shopping Cart: Redux</h1>
        <div className="split">
        <div>
       {this.renderProducts()}
       </div>
       <div>
        <Cart/>
        </div>
       </div>
       </div>
    );
  }
}

const mapStateToProps =(state)=>({
    products: state.products,
   
}) 
const mapDispatchToProps= (dispatch) =>({
   handleAddToCardProduct : (product) => dispatch(addToCart(product))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
