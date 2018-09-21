import React, { Component } from "react";
import "../App.css";
import CapsuleListItem from "./CapsuleListItem";

class SpaceXCapsulesList extends Component {
  render() {
    return (
      <div className="box">
        <table id="capsules-list">
          <thead>
            <tr>
              <th className="col1" />
              <th className="col2" />
            </tr>
          </thead>
          <tbody key={1}>
            {this.props.data.map(data => (
              <CapsuleListItem key={data.id} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpaceXCapsulesList;
