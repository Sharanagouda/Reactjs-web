import React from "react";
import {connect} from "react-redux";
import {Jombotran,Container, Rrid, Row, Col, Image, Button} from "react-bootstrap";
import {getChannel,activateChannel,fetchPost } from "../action";
import "./Channels.css"

const Channel =({channelName, channelString, onClick, active})=>(
    <div onClick={()=>{onClick(channelString)}} className="col-lg-2 col-md-4 col-sm-6">
        <div className="channel-button" style={{backgroundColor: active == channelString ? 'orange' :''}}>
            <a><p style={{color:"#000",fontFamily:""}}>{channelName}</p></a>
        </div>
    </div>
    
)
const mapStateToProps = (state)=> ({
    active:state.channel
})
const mapDispatchToProps =(dispatch)=>({
    onClick:(channelString) => dispatch( getChannel(channelString)),
    onClick:(channelString) => dispatch(fetchPost(channelString)),
 })

export default connect(mapStateToProps,mapDispatchToProps)(Channel);