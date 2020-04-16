import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Error() {
  return (
    <div className='error-page'>
      <Container>
        <Row>
          <Col>
            <h1>Page Not Found</h1>
            <p>Sorry, it looks like the page you're looking for is missing.</p>
            <p><a href="/contact">Drop me a line</a> or <a href="/">return home.</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Error;