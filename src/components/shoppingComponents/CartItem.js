import React from "react";
import {Col, Row, Button, Panel, Label, Badge,Image} from "react-bootstrap";
import "./CartItem.css";

class CartItem extends React.Component{
    render(){
        return(
            <div className='cartItem'>
                <div className="cartItem-div">
                    <div  className="flex-first">
                    <p className="productTitle">{this.props.cartItem.title}</p>
                    <Image src={this.props.cartItem.productImage} className="cart-Image" rounded />
                       
                    </div>
                    <div  className="flex-second">
                    <h5><Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
                        <p>units :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                    </div>
                    <div  className="flex-three">
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>DEL</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;
