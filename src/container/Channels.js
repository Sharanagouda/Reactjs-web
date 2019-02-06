import React from "react";
import {connect} from "react-redux";
import {Jombotran,Container, Rrid, Row, Col, Image, Button} from "react-bootstrap";
import {getChannel,activateChannel,fetchPost } from "../action";
import "./Channels.css"
// style={{backgroundColor: active == channelString ? 'orange' :''}}
const Channel =({channelName,channelLogo, channelString, onClick, active})=>(
    <div onClick={()=>{onClick(channelString)}} className="col-lg-2 col-md-4 col-sm-6">
        <div className="channel-mainDiv">
            <Image src={channelLogo} className="channelLogo" rounded />
            <p className="channelName">{channelName}</p>
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