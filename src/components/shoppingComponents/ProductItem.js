import React,{Component} from "react";
import {Well, Col, Row, Button, Image} from "react-bootstrap";
import "./ProductItem.css";

class ProductItem extends Component{

    render(){
        return(
            <div className="product-main-div">
                <div className="product-div">
                    <div className="flex-one">
                         <Image src={this.props.product.productImage} className="product-Image" rounded />
                    </div>
                    <div className='flex-two'>
                        <h4>{this.props.product.title}</h4>
                        <p>{this.props.product.description}</p>
                        <p>Price: INR {this.props.product.price}</p>
                        <Button onClick={() => this.props.handleOnAdd(this.props.product)} bsStyle='primary'>Add to Cart</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;