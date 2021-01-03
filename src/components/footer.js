import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

export default () => (
  <Container fluid className="footer px-0">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="nav-links">
        © 2021, Built with
          {` `}
        <a title="Gatsby" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </Navbar.Brand>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link as={Link} to="/" title="Home">
            Home
              </Nav.Link>

          <Nav.Link as={Link} to="/blog" title="Latest Posts">
            Latest Posts
              </Nav.Link>
          <Nav.Link title="GitHub repository" href="https://github.com/schwabthedeck" target="_blank" rel="noopener noreferrer">
            GitHub
              </Nav.Link>
          {/* <Nav.Link title="Twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
              </Nav.Link> */}
          <Nav.Link title="Buy Me A Coffee" href="https://www.buymeacoffee.com/schwabthedeck" target="_blank" rel="noopener noreferrer">
            Buy Me A Coffee
              </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
)