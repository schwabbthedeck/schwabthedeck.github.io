import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/xknvaakp"
        method="POST"
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your email address:</Form.Label>
          <Form.Control type="email" name="email"/>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" />
        </Form.Group>
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button variant="primary" type="submit">Submit</Button>}
        {status === "ERROR" && <p>Oops! There was an error.</p>}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;