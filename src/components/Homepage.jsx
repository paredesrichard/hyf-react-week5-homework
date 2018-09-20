import React, { Component } from "react";
import "../App.css";
import ContentHeader from "./ContentHeader"

class Homepage extends Component {
  render() {
    const contentTitle="Welcome to SpaceX dummy Home page";
    const pageDescription = "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
    return (
      <div id="homepage" className="box">
        <ContentHeader title={contentTitle} pageDescription={pageDescription} />
      </div>       
    );
  }
}

export default Homepage;
