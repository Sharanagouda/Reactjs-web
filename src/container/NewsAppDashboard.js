import React,{Component} from "react";
import ChannelField from "../components/ChannelField";
import Button from "../components/Button";
import TopNews from "../components/NewsItem";
import {connect} from "react-redux";
import "./NewsAppDashboard.css";

class NewsAppDashboard extends Component{
    render(){
        const {news} =this.props;
        //console.log(news);
        return(
            <div className="channel-main-div">
            <div className="channel-div" >
                <ChannelField/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> ({
    news:state.news.payload
})
const mapDispatchToProps =(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(NewsAppDashboard);