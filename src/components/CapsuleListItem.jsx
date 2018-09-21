import React, { Component } from "react";
import "../App.css";

class CapsuleListItem extends Component {
  renderObject(obj, key) {
    return (
      <tr key={key}>
        <td className="col1">{key}</td>
        {Object.keys(obj).map(
          key =>
            typeof obj[key] === "object" ? (
              this.renderObject(obj[key], key)
            ) : (
              <tr key={key}>
                <td className="col3">
                  {key}:{obj[key]}
                </td>
              </tr>
            )
        )}
      </tr>
    );
  }

  render() {
    console.log(this.props.data);

    return Object.keys(this.props.data).map(
      key =>
        typeof this.props.data[key] === "object" ? (
          this.renderObject(this.props.data[key], key)
        ) : (
          <tr>
            <td>{key}</td>
            <td>{this.props.data[key]}</td>
          </tr>
        )
    );
  }
}

export default CapsuleListItem;
