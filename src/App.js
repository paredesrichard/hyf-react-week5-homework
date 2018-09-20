import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SpaceXHeader from "./components/SpaceXHeader";
import { Homepage, Launches, RocketsPage, CapsulesPage, CompanyInfoPage } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        
        <SpaceXHeader />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/launches" component={Launches} />
          <Route exact path="/launches/:param" component={Launches} />
          <Route exact path="/rockets" component={RocketsPage} />
          <Route exact path="/capsules" component={CapsulesPage} />
          <Route exact path="/info" component={CompanyInfoPage} />
        </Switch>

      </div>
      
        
    );
  }
}

export default App;
