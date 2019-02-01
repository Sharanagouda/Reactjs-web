import React from "react";
import {connect} from "react-redux";
import {fetchPost} from "./../action";

const Button =({fetchPost, channel})=>(
    <button 
     onClick={()=>{fetchPost(channel)}}
     className="btn btn-primary btn-lg btn-block">
     GET TOP NEWS
    </button>
);

const mapStateToProps=(state)=>({
    channel:state.channel
});

const mapDispatchToProps=()=>({
    fetchPost:fetchPost
})
export default connect(mapStateToProps,mapDispatchToProps)(Button);
