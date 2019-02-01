import React,{Component} from "react";
import {connect} from "react-redux"
import {link} from "react-router-dom";
import {Jombotran, Rrid, Row, Col, Image, Button} from "react-bootstrap";

class MyBlog extends Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }

    render(){
        return(
            <div>
            <p>My Blog</p>
            </div>
        )
    }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateToProps,mapDispatchToProps)(MyBlog);
