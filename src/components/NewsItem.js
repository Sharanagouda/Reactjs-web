import React,{Component} from "react";

class NewsItem extends Component{
    constructor(props){
        super(props);
this.state={
    newsItem:this.props.article
}
console.log(this.state.newsItem);
    }

    render(){
            return(
                <div>
                <div className="article-wrapper">
                <a target="_blank"> read more </a>
                </div>
                </div>
                
            )
            
        
    }
}
export default NewsItem;