import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Nav style={{ display: 'flex', flexDirection: 'row' }}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/personal">About</NavLink>
        </NavItem>
        <NavItem>
          <a href="https://drive.google.com/file/d/1nohLYiBHv9B1G8ZeWJXSkAX09ss6dr2G/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </NavItem>
        <NavItem>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact Me</NavLink>
        </NavItem>
      </Nav>

    </nav>
  );
}

export default NavBar;
