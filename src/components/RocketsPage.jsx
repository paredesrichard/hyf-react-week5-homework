import React, { Component } from "react";
import "../App.css";

import { fetchSpaceXData } from "../api";
import ContentHeader from "./ContentHeader";
import SpaceXRocketsList from "./SpaceXRocketsList";


class RocketsPage extends Component {
  constructor(props){
    super(props);
    this.state = {rocketsDetails : [], initialURL: props.match.url }
  }

  componentDidMount() {
    fetchSpaceXData(this.state.initialURL).then(data => {
      this.setState({ rocketsDetails: data });
      console.log("rocket details:", data)
    });
  }

  render() {
    const contentTitle = "Welcome to SpaceX Rockets Page";
    const pageDescription = "This page contains SpaceX Rocket information.";
    return (
      <div id="launches-page">
        <ContentHeader title={contentTitle} pageDescription={pageDescription} />
        <SpaceXRocketsList data={this.state.rocketsDetails} />
      </div>
    );
  }
}

export default RocketsPage;
