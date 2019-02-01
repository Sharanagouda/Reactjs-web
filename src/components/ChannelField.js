import React from "react";
import Channel from "../container/Channels";
const ChannelField = ()=>(
    <div className="row">
    <Channel channelName="Google News (India)" channelString="google-news-in" />
    <Channel channelName="The times of India" channelString="the-times-of-india" />
    <Channel channelName="News 24" channelString="news24" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="The Hindu" channelString="the-hindu" />
    <Channel channelName="The Economist" channelString="the-economist" />
    <Channel channelName="Entertainment" channelString="entertainment-weekly" />
    <Channel channelName="TechRadar" channelString="techradar" />
    <Channel channelName="Hacker News" channelString="hacker-news" />
    <Channel channelName="CNBC" channelString="cnbc" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="FT" channelString="financial-times" />
    <Channel channelName="Times Now" channelString="time" />
    <Channel channelName="GOOGLE" channelString="google-news" /> 
    </div>
)
export default ChannelField;