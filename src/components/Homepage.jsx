import React, { Component } from "react";
import "../App.css";

class Homepage extends Component {
  render() {
    return (
      <div id="homepage" className="box">
        <h1 className="text-center"> Welcome to SpaceX dummy Home page </h1>
        <p className="App-intro text-center content">
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
      </div>       
    );
  }
}

export default Homepage;
