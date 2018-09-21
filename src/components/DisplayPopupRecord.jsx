import React, { Component } from "react";
import "../App.css";
import "../index.css";

class DisplayPopupRecord extends Component {
  render() {
    const data = this.props.data;
    return (
      <div key={data.flight_number} className="App">
        <img
          className="mission-patch"
          src={
            data.links.mission_patch !== null
              ? data.links.mission_patch
              : "https://pbs.twimg.com/profile_images/671865418701606912/HECw8AzK_400x400.jpg"
          }
          alt="mission patch"
        />
        <p className="pad1">
          Mission name: {data.mission_name} <br />
          Flight number: {data.flight_number} <br />
          Launch Success: {data.launch_success ? "True" : "False"} <br />
          Launch Year: {data.launch_year} <br />
          Rocket: {data.rocket.rocket_name} <br />
          Upcoming: {data.upcoming ? data.launch_date_utc : "No"}
        </p>
        <p>Details: {data.details}</p>
      </div>
    );
  }
}

export default DisplayPopupRecord;
