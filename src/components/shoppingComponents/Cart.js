import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateItemUnits, deleteFromCart} from "./../../action";
import {Col, Row, Panel, Badge, Button} from "react-bootstrap";
import CartItem from "./CartItem";
import "./Cart.css";


//https://github.com/steelx/shoppingcart/tree/master/src/components
class Cart extends Component {
constructor(props){
    super(props);
    this.state={

    };
}
renderCart() {
    return (
        <Panel className='cartList' header='Cart' bsStyle='primary'>
            {this.cartList()}
        </Panel>
    );
}
handleDeleteFromCart(id) {
    this.props.handleDeteFromCart({id})
}
handleDeductUnit(id) {
    let units = -1;
    this.props.handleUpdateItemUnits({id, units})
}
handleAddUnit(id) {
    let units = 1;
    this.props.handleUpdateItemUnits({id, units})
}

cartList() {
    return (
        this.props.cart.map(cartItem => {
          return (
              <CartItem key={cartItem.id}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
          );
        })
    );
}

cartTotal() {
    return (
        <div>
            <div className="cart-total-Main-div">
                <div >
                    <h4>TOTAL Price: INR {this.totalAmount(this.props.cart)}</h4>
                </div>
            </div>
            <div className="checkout-div">
            <Button bsStyle="success"> Proceed to Checkout</Button>
        </div>
        </div>
    );
}
totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
        acum += item.price * item.units;
        return acum;
    }, 0);
}

render() {
    const {cart} =this.props;
    console.log(cart);
    if (this.props.cart.length !== 0) {
        return (
            <aside className='cart'>
                {this.renderCart()}
                {this.cartTotal()}
            </aside>
        );
    }

    return (
        <div className='cart-Content'>
        <p> cart empty</p>
       </div>
    );
}
}

const mapStateToProps=(state) =>({
        cart: state.cart
})
const mapDispatchToProps=(dispatch)=> ({
   handleDeteFromCart:(id)=> dispatch(deleteFromCart(id)),
    handleUpdateItemUnits:(id,units)=>dispatch(updateItemUnits(id, units))
       

})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);