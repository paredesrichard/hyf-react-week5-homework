import React, { Component } from "react";
import "../App.css";
import SpaceXNavBar from "./SpaceXNavBar";

class SpaceXHeader extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.spacex.com/sites/all/themes/spacex2012/logo.png"
            alt="logo"
          />
          <h1 className="App-title">Hackyourfuture React SpaceX App</h1>
        </header>
        <SpaceXNavBar />
      </div>
    );
  }
}

export default SpaceXHeader;
