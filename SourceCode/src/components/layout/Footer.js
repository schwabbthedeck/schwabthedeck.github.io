import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

// import image from "../../images/banner.png"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Jane Schwab</h3>
          <p style={{ color: "midnightblue", fontSize: "1.3rem" }}>
            <a href="mailto:jane.a.schwab@gmail.com">
              <span style={{ color: "midnightblue" }}>jane.a.schwab@gmail.com</span>
            </a> 
          </p>
          <p style={{ fontSize: "1.3rem" }}>
            If something caught your eye, feel free to reach out via 
            <a
              href="https://www.linkedin.com/in/jane-schwab-b7019538/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "midnightblue "}}
            > LinkedIn </a> 
            or 
            <a href="mailto:jane.a.schwab@gmail.com" target="_blank" rel="noopener noreferrer"> email</a>
            . I'm a quick learner and love hearing about new opportunities.
          </p>
          
        </Col>
      </Row>
      {/* <br />
          <p style={{ fontSize: "1.3rem" }}>
            I'm a great developer that loves to code. I can help you grow your
            next product.
          </p> */}
      {/* <Row className="footer_social">
        <Col xs={12} md={8}>
          <p style={{ fontSize: "1.3rem" }}>
            If something caught your eye, feel free to reach out via LinkedIn or email. I'm a quick learner and
            love new opportunities.
          </p>
        </Col>
        <Col xs={6} md={2}>
          <a
            href="https://www.linkedin.com/in/jane-schwab-b7019538/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>
        <Col xs={6} md={2}>
          <a href="mailto:jane.a.schwab@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-envelope-open-text" />
          </a>
        </Col>
      </Row> */}
      {/* <Row>
        <Col
          style={{
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Menu
        </Col>
      </Row> */}
      {/* <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/projects">
            <span className="link_styles">Projects</span>
          </Link>
        </Col>
      </Row> */}

      {/* TODO: Make use of the SocialRow component to make the below icons obsolete */}

      {/* <Row className="footer_social text-center">
        <Col>
          <a
            href="https://www.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            className="hover_effect"
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-hackerrank hover_effect" />
          </a>
        </Col>
        <Col>
          <a href="https://angel.co/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-angellist hover_effect" />
          </a>
        </Col> 
      </Row> */}
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Jane Schwab © {new Date().getFullYear()}, Built with 🌮
          {/* <i
            className="fas fa-mug-hot"
            style={{
              marginLeft: "10px",
              marginRight: "3px",
              fontSize: "1.5rem",
            }}
          /> */}
          <a href="https://www.gatsbyjs.org">
            {" "}
            <span className="midnightblue">& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#708090",
  color: "#fff",
  paddingBottom: "0",
  width: "100%"
}

export default Footer
