import React from 'react';
import logo from './jsLogo.svg';
import {Navbar, Nav, NavLink } from 'react-bootstrap';
// import { NavLink} from 'react-router-dom';

class TopMenu extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img alt='JS logo' src={logo} width='30' height='30'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="my-nav">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopMenu;