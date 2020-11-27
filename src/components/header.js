import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

// TODO move svg icons from file to somewhere else and import them...

export default () => (
  <Container fluid className="header px-0">
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="40" />
          <g clip-path="url(#clip0)">
            <path d="M19.2441 32.1714L5.29883 25.6943V23.1479L19.2441 16.688V20.123L9.69092 24.105L8.23828 24.4126V24.5151L9.69092 24.8398L19.2441 28.7363V32.1714ZM29.9937 34.3589C28.6151 34.3589 27.3618 34.0854 26.2339 33.5386C25.1174 32.9917 24.2173 32.1657 23.5337 31.0605C22.8615 29.9554 22.4912 28.5711 22.4229 26.9077L22.457 26.8052H25.687C25.7326 28.48 26.1143 29.7104 26.832 30.4966C27.5612 31.2827 28.598 31.6758 29.9424 31.6758C31.3551 31.6758 32.3919 31.2371 33.0527 30.3599C33.7135 29.4712 34.0439 28.3319 34.0439 26.9419V11.7661L30.7285 11.3218V9.11719H40.1963V11.2876L37.4106 11.7661V26.9419C37.4106 29.175 36.7783 30.9694 35.5137 32.3252C34.2604 33.681 32.4204 34.3589 29.9937 34.3589ZM51.749 34.3589C50.2337 34.3589 48.7754 34.1367 47.374 33.6924C45.9727 33.248 44.634 32.5645 43.3579 31.6416V26.3267H45.9727L46.5366 30.2402C47.2772 30.696 48.0804 31.0492 48.9463 31.2998C49.8122 31.5505 50.7464 31.6758 51.749 31.6758C53.4466 31.6758 54.7625 31.2998 55.6968 30.5479C56.631 29.7845 57.0981 28.7876 57.0981 27.5571C57.0981 26.4178 56.6766 25.4722 55.8335 24.7202C54.9904 23.9683 53.4865 23.3473 51.3218 22.8574C48.7469 22.265 46.7816 21.3649 45.4258 20.1572C44.07 18.9382 43.3921 17.4058 43.3921 15.5601C43.3921 14.2612 43.7339 13.0991 44.4175 12.0737C45.1125 11.0483 46.0752 10.2394 47.3057 9.64697C48.5361 9.05452 49.9717 8.7583 51.6123 8.7583C53.3555 8.7583 54.8936 9.02604 56.2266 9.56152C57.571 10.0856 58.6761 10.7236 59.542 11.4756V16.4487H56.9272L56.3633 12.894C55.8506 12.4839 55.2126 12.1421 54.4492 11.8687C53.6859 11.5952 52.7402 11.4585 51.6123 11.4585C50.1654 11.4585 48.9919 11.8288 48.0918 12.5693C47.2031 13.3099 46.7588 14.2897 46.7588 15.5088C46.7588 16.5798 47.186 17.457 48.0405 18.1406C48.895 18.8128 50.3761 19.411 52.4839 19.9351C55.1043 20.5845 57.0868 21.5472 58.4312 22.8232C59.7869 24.0879 60.4648 25.6545 60.4648 27.5229C60.4648 28.856 60.106 30.0409 59.3882 31.0776C58.6704 32.103 57.6564 32.9062 56.3462 33.4873C55.0474 34.0684 53.515 34.3589 51.749 34.3589ZM62.0029 36.1362L72.3936 9.11719H75.2305L64.8569 36.1362H62.0029ZM78.2212 32.5132V29.1636L88.4409 25.0962L89.8765 24.8057V24.7031L88.4409 24.3613L78.2212 20.3623V17.0298L92.833 23.4897V26.0361L78.2212 32.5132Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="100" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          {/* <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link> */}
          <Nav.Link className="ml-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/contact" title="Contact">
            Contact
          </Nav.Link>
          <Nav.Link title="GitHub" href="https://github.com/schwabthedeck" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" fill="currentColor" /></svg>
          </Nav.Link>
          {/* <Nav.Link title="Twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor" /></svg>
          </Nav.Link> */}
          <Nav.Link title="Buy Me A Coffee" href="https://www.buymeacoffee.com/schwabthedeck" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z" fill="currentColor" /><path d="M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z" fill="currentColor" /><path d="M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z" fill="currentColor" /></svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
)
