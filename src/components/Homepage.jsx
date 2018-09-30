import React, { Component } from "react";
import "../App.css";
import ContentHeader from "./ContentHeader"

class Homepage extends Component {
  render() {
    const contentTitle="Welcome to SpaceX dummy Home page";
    //const pageDescription = "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
    const pageDescription = "this is just a simple heroku test";
    return (
      <div id="homepage" className="box">
        <img className="companyimage" src="https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2015_-_01_crs6_hangar.jpg" alt="spacex" />
        <ContentHeader title={contentTitle} pageDescription={pageDescription} />
      </div>       
    );
  }
}

export default Homepage;
