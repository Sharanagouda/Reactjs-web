import React,{Component} from "react";
import ChannelField from "../components/ChannelField";
import TopNews from "../components/NewsItem";
import {connect} from "react-redux";
import NewsAppDashboard from "./NewsAppDashboard";
import NewsItem from "../components/NewsItem";
import { Link } from 'react-router-dom';
import { Card, Container,Row,Col,Image } from 'react-bootstrap';
import "./NewsPaper.css"



class Button extends React.Component {
    render() {
        const {url} =this.props;
      return (
        <a href={url}  style={{color:"blue", fontSize:15,}}>Read more</a>
       
      )
    }
  }
  class CardTitle extends React.Component {
    render() {
      
      var style = { 
          padding:"10px",

      };
      return (
        <header style={style} className="card-header-for-title">
          <h5 className="card-header--title">{this.props.title}</h5>
        </header>
      )
    }
  }
class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
          height:"200px",
        margintop:"-10px"
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header-category">{category}</h4>
        </header>
      )
    }
  }
class CardBody extends Component {
    render() {
        const { description, content, publishedAt,url } = this.props;
        var str=publishedAt;
        var publishedOn = str.slice(0, 10);
      return (
        <div className="card-body">
          <p className="date" >Published On: {publishedOn}</p>
          <p className="card-description">{description}</p>
          <p className="body-content">{content}</p>
          <Button url={url}/>
        </div>
      )
    }
  }
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
                    <div key={i} className="col-lg-3 col-md-5 col-sm-8" style={{ backgroundColor:"#FFF", paddingBottom:"10px" }}>
                    <div className="card-div">
                    <CardTitle title={item.title}/>
                    <CardHeader category={item.source.id} image={item.urlToImage}/>
                    <CardBody content={item.content} description={item.description} publishedAt={item.publishedAt} url={item.url}/>
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
    
        const {news} =this.props;
        console.log(news)
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
    news:state.news.payload
})
const mapDispatchToProps =(dispatch)=>({

}) 
export default connect(mapStateToProps,mapDispatchToProps)(NewsPaper);