import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className='contact-page'>
      <Container>
        <Row>
          <Col>
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col xs lg={9}>
            <p>You can reach me on <a href="https://www.linkedin.com/in/jane-schwab/">LinkedIn</a> or by email. </p>
            <p>Fill out the form below to send me an email. Ensure your email address is correct or provide another way to contact you in the message. Thanks!</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg={8}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;