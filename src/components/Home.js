import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='homepage'>
      <Container>
        <Row>
          <Col>
            <h1>Welcome!</h1>
            <div>
              Hello!
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;