import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

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
          <NavDropdown title="Launches" id="basic-nav-dropdown">
            <MenuItem href="/launches/all">All</MenuItem>
            <MenuItem href="/launches/upcoming">Upcoming</MenuItem>
            <MenuItem href="/launches">Past Launches</MenuItem>
          </NavDropdown>
          <NavItem href="/rockets">
            Rockets
          </NavItem>
          <NavItem href="/info">
            Company Info
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default SpaceXNavBar;
