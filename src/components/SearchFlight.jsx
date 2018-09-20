import React, { Component } from "react";
import "../App.css";

class SearchFlight extends Component {
  render() {
    return (
      <div className="box pad10">
        <span> Search for specific mission: </span>
        <input
          type="text"
          placeholder="enter flight number"
          value={this.props.value}
          onChange={e => {
            this.props.onChange(e.target.value);
          }}
        />
        <button onClick={this.props.onButtonClick}>Search</button>
      </div>
    );
  }
}

export default SearchFlight;
