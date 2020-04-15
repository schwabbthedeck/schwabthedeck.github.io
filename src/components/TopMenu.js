import React from 'react';
import logo from './jsLogo.svg';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
// import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './TopMenu.css';

class TopMenu extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" sticky="top" bg="dark" variant="dark" className="my-top-menu">
        <Navbar.Brand href="/">
          <img alt='JS logo' src={logo} width='30' height='30'></img>
          <span className="roboto-text brand-label">Jane Schwab</span>
        </Navbar.Brand>
        {/* <Nav className="my-top-nav justify-content-end" >
          <NavLink href="https://github.com/schwabthedeck">
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
          </NavLink>
        </Nav> */}
        <div className="navbar-nav icon-bar">
          <a href="https://github.com/schwabthedeck">
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
          </a>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="my-nav">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopMenu;