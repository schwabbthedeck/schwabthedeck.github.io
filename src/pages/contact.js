import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Form, Button } from 'react-bootstrap'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Contact Me</h1>
    <h3>Feel free to drop me a line.</h3>
    <Form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" name="subject" />
      </Form.Group>
      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <input type="hidden" name="form-name" value="contact" />
    </Form>
  </Layout>
)

export default ContactPage