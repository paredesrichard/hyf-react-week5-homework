import React, { Component } from "react";
import "../App.css";

import { fetchSpaceXData } from "../api";
import ContentHeader from "./ContentHeader";
import SpaceXCapsulesList from "./SpaceXCapsulesList"

class CapsulesPage extends Component {
  constructor(props){
    super(props);
    this.state = {capsuleDetails : [], initialURL: props.match.url }
  }
  componentDidMount() {
    fetchSpaceXData(this.state.initialURL).then(data => {
      this.setState({ capsuleDetails: data });
      //console.log("capsules details:", data)
    });
  }

  render() {
    const contentTitle = "Welcome to SpaceX Capsules Page";
    const pageDescription = "This page contains SpaceX Capsules information.";
    return (
      <div id="capsules-page">
        <ContentHeader title={contentTitle} pageDescription={pageDescription} />
        <SpaceXCapsulesList data={this.state.capsuleDetails} />
      </div>       
    );
  }
}

export default CapsulesPage;
