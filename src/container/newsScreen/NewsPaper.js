import React,{Component} from "react";
import ChannelField from "../../components/ChannelField";
import TopNews from "../../components/NewsItem";
import {connect} from "react-redux";
import NewsAppDashboard from "./../newsDashboard/NewsAppDashboard";
import NewsItem from "../../components/NewsItem";
import { Link } from 'react-router-dom';
import { Card, Container,Row,Col,Image } from 'react-bootstrap';
import "./NewsPaper.css"
import CardItem from "../../components/card/Card"

class NewsPaper extends Component{
 constructor(props){
     super(props);
     this.state = {
    }
    this.renderList = this.renderList.bind(this);
    }

    renderList(){
        if(this.props.news){
            return(
                <div  style={{ backgroundColor:"#F3F3F3" }}>
                {this.props.news.map((item,i)=>{
                    return(
                    <div key={i} className="col-lg-4 col-md-5 col-sm-8" style={{ backgroundColor:"#FFF", paddingBottom:"10px" }}>
                    <div className="card-div">
                        <CardItem  title={item.title} category={item.source.id} image={item.urlToImage} content={item.content} description={item.description} publishedAt={item.publishedAt} url={item.url}/>
                    </div>
                   </div>
                  
                    )
                })
                      }
                </div>
            )
            
        }else{
            return(
                <div className="no-news">
                    <p> Click on any news Channel</p>
                </div>
            )
        }
        
      
    }

    render(){
    
        const {news,newschannel} =this.props;
        return(
            <div className="newsPaper-main-div">
                <NewsAppDashboard/>
                <div><p></p></div>
                <div>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> ({
    news:state.news.payload,
    newschannel:state.news.channelName
})
const mapDispatchToProps =(dispatch)=>({

}) 
export default connect(mapStateToProps,mapDispatchToProps)(NewsPaper);