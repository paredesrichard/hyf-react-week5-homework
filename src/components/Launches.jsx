import React, { Component } from "react";
import "../App.css";

import { fetchSpaceXData } from "../api";
import ContentHeader from "./ContentHeader";
import SearchFlight from "./SearchFlight";
import SpaceXLaunchList from "./SpaceXLaunchList";

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchDetails: [],
      searchFlightNumber: "",
      initialURL: props.match.url
    };
    this.changeValue = this.changeValue.bind(this);
    this.SearchMissionLaunch = this.SearchMissionLaunch.bind(this);
  }

  changeValue(searchFlightNumber) {
    this.setState({ searchFlightNumber });
  }

  componentDidMount() {
    fetchSpaceXData(this.state.initialURL).then(data => {
      this.setState({ launchDetails: data });
    });
  }

  SearchMissionLaunch() {
    const searchParameter = this.state.searchFlightNumber;
    let url = "";
    if (searchParameter === "") url = this.state.initialURL;
    else url = `${this.state.initialURL}?flight_number=${searchParameter}`;
    fetchSpaceXData(url).then(data => {
      Object.entries(data)[0] !== undefined
        ? console.log("data", data)
        : console.log("empty data")
      this.setState({ launchDetails: data, searchFlightNumber: "" });
    });
  }

  render() {
    const contentTitle = "Space X Launch Manifest";
    const pageDescription = "This page contains SpaceX launch manifest.";
    return (
      <div id="launches-page">
        <ContentHeader title={contentTitle} pageDescription={pageDescription} />
        <SearchFlight
          onChange={this.changeValue}
          searchParameter={this.state.searchFlightNumber}
          onButtonClick={this.SearchMissionLaunch}
          value={this.state.searchFlightNumber}
        />
        <SpaceXLaunchList data={this.state.launchDetails} />
      </div>
    );
  }
}

export default Launches;
