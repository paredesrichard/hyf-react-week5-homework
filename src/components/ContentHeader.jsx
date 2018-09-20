
import React, { Component } from "react";
import "../App.css";

/* this component just renders the title of the page with a brief description */ 
class ContentHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center"> {this.props.title} </h1>
        <p className="App-intro text-center content">{this.props.pageDescription}</p>       
      </div>
    );
  }
}

export default ContentHeader;