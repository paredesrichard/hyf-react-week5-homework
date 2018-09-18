import React, { Component } from "react";
import "../App.css";

import { fetchSpaceXData } from "../api";

class Launches extends Component {

  constructor(props) {
    super(props);
    this.state = { launchDetails: [] };
  }

  componentDidMount() {
    console.log("component did mount");
    fetchSpaceXData("/launches").then(data => {
      this.setState({ launchDetails: data });
      console.log("launchDetails", this.state.launchDetails)
    });
  }


  render() {
    return (
      <div id="launches-page">
        <h1 className="text-center"> Welcome to SpaceX Launches website </h1>
        <p className="text-center">
          This page contains SpaceX launch history/informations.
        </p>
      </div>       
    );
  }
}

export default Launches;
