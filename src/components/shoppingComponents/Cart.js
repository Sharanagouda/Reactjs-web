import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateItemUnits, deleteFromCart} from "./../../action";
import {Col, Row, Panel, Badge} from "react-bootstrap";
import CartItem from "./CartItem";
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
    this.props.handleDeteFromCart(id)
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
        <Panel>
            <Row>
                <Col xs={12} sm={6}>
                    <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
                </Col>
            </Row>
        </Panel>
    );
}
totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
        acum += item.price * item.units;
        return acum;
    }, 0);
}

render() {
    if (this.props.cart.length !== 0) {
        return (
            <aside className='cart'>
                {this.renderCart()}
                {this.cartTotal()}
            </aside>
        );
    }

    return (
        <aside className='cart'>cart empty</aside>
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