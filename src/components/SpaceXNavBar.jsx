import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SpaceXNavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">SpaceX</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/launches">
            Launches
          </NavItem>
          <NavItem eventKey={2} href="/rockets">
            Rockets
          </NavItem>
          <NavItem eventKey={3} href="/capsules">
            Capsules
          </NavItem>
          <NavItem eventKey={4} href="/info">
            Company Info
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default SpaceXNavBar;
