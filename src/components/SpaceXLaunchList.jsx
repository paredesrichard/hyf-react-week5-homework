import React, { Component } from "react";
import "../App.css";

import Popup from "reactjs-popup";
import DisplayPopupRecord from "./DisplayPopupRecord";

class SpaceXLaunchList extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="box">
        <table id="launch-manifest-list">
          <thead className="table-header">
            <tr>
              <td>Flight Number</td>
              <td>Mission Name</td>
              <td>Launch Date</td>
              <td>Mission Status</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(data => (
              <Popup
                key={data.flight_number}
                trigger={
                  <tr key={data.flight_number}>
                    <td>{data.flight_number}</td>
                    <td>{data.mission_name}</td>
                    <td>{data.launch_date_utc}</td>
                    <td>
                      {data.launch_success
                        ? "Success"
                        : data.launch_success === null
                          ? "Upcoming"
                          : "Failed"}
                    </td>
                  </tr>
                }
                modal
                closeOnDocumentClick
              >
                <DisplayPopupRecord data={data} />
              </Popup>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpaceXLaunchList;
