import React, { Component } from "react";
import "../App.css";

import { fetchSpaceXData } from "../api";

class CompanyInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { companyInfo: [] };
  }

  componentDidMount() {
    console.log("component did mount");
    fetchSpaceXData("/info").then(data => {
      this.setState({ companyInfo: data });
    });
  }
  render() {
    const { companyInfo } = this.state;
    return (
      <div className="box">
        <h1 className="text-center"> Welcome to SpaceX Company Info Page </h1>
        <div className="content">
          <h2>CEO : {companyInfo.ceo}</h2>
          <h3>Summary:</h3>
          <p>
            {companyInfo.summary}
            <br /><br />
            Employees: {companyInfo.employees}
            <br />
            Founded: {companyInfo.founded}
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default CompanyInfoPage;
