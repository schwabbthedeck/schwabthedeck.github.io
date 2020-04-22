import React from 'react';
import logo from './jsLogo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import './SideMenu.css';

class SideMenu extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="my-side-menu">
        <Navbar.Brand href="/">
          <img alt='JS logo' src={logo} width='30' height='30'></img>
          <span className="roboto-text brand-label">Jane Schwab</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="my-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
          <div className="icon-bar">
            <a href="https://github.com/schwabthedeck" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/jane-schwab/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="/contact">
              <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default SideMenu;