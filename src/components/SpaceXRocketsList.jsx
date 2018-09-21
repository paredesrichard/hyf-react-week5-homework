import React, { Component } from "react";
import "../App.css";

class SpaceXRocketsList extends Component {
  render() {
    return (
      <div className="box">
        <table id="launch-manifest-list">
          <thead className="table-header">
            <tr>
              <td>Rocket ID</td>
              <td>Rocket Name</td>
              <td>Active</td>
              <td>Wikipedia Link</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(data => (
              <tr key={data.rocketid}>
                <td>{data.rocketid}</td>
                <td>{data.name}</td>
                <td>{data.active ? "Yes" : "No"}</td>
                <td>
                  <a href={data.wikipedia} target="_blank">
                    Click Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpaceXRocketsList;
